import requests
import pandas as pd
import aiohttp
import asyncio
import time


from db import save_to_db, get_network_data, create_table
from datetime import datetime
from cyberpy._wallet import address_to_address
from calculations import get_cost_optimization, get_cost_optimization_endorsement, get_decentralization,\
    get_decentralization_endorsement, get_confidence, get_confidence_endorsement, get_reliability,\
    get_reliability_endorsement, get_participation, get_participation_endorsement


async def get_validators(session, network):
    url = network['lcd_api'] + '/cosmos/staking/v1beta1/validators?pagination.limit=1000'
    validators = requests.get(url).json()['validators']
    props = get_last_n_proposal_id(network['lcd_api'], 5)
    result = await get_data(session, network, validators, props)
    return pd.DataFrame(result, columns=[
        'moniker',
        'operator_address',
        'staked',
        'delegator_shares',
        'greed',
        'ownership',
        'voted',
        'isjailed',
        'logo_path'
    ])


async def get_data(session, network, validators, props):
    tasks = []
    for v in validators:
        tasks.append(asyncio.ensure_future(get_validator_data(network, v, props, session)))
    res = await asyncio.gather(*tasks)
    return res


async def get_active_set(session, network):
    url = network['lcd_api'] + '/cosmos/staking/v1beta1/params'
    async with session.get(url) as resp:
        active_set = await resp.json()
        active_set = int(active_set['params']['max_validators'])
    return active_set


async def get_validator_data(network, validator, props, session):
    tasks = [
                asyncio.ensure_future(get_self_delegation(
                    network['lcd_api'],
                    validator['operator_address'],
                    network['prefix'],
                    int(validator['tokens']),
                    session)
                ),
                asyncio.ensure_future(get_address_voted(
                    network['lcd_api'],
                    address_to_address(validator['operator_address'], network['prefix']),
                    props,
                    session
                )),
            ]
    data = await asyncio.gather(*tasks)
    if network['name'] != 'bostrom':
        logo_path = network['logo_path'] + validator['operator_address'] + '.png'
    else:
        url = network['logo_path'] + validator['description']['identity'] + '&fields=pictures'
        async with session.get(url) as resp:
            try:
                res = await resp.json()
                logo_path = res['them'][0]['pictures']['primary']['url']
            except Exception as e:
                logo_path = ''
    return (
        validator['description']['moniker'],
        validator['operator_address'],
        int(validator['tokens']),
        float(validator['delegator_shares']),
        float(validator['commission']['commission_rates']['rate']),
        data[0],
        data[1],
        validator['jailed'],
        logo_path
    )


async def get_self_delegation(
        lcd_api: str,
        validator_address: str,
        prefix: str,
        tokens: int,
        session,
):
    delegator_address = address_to_address(validator_address, prefix)
    try:
        url = lcd_api + f'/cosmos/staking/v1beta1/validators/{validator_address}/delegations/{delegator_address}'
        async with session.get(url) as resp:
            delegated = await resp.json()
            delegated = int(delegated['delegation_response']['balance']['amount'])
            delegation_share = delegated / tokens
    except KeyError as e:
        delegation_share = 0
    return delegation_share


def get_last_n_proposal_id(lcd_api: str, n: int):
    url = lcd_api + '/cosmos/gov/v1beta1/proposals?pagination.limit=1000000000'
    res = requests.get(url).json()['proposals']
    res = [prop for prop in res if prop['status'] not in ["PROPOSAL_STATUS_VOTING_PERIOD", "PROPOSAL_STATUS_FAILED"]]
    last_proposal_id = int(res[-1]['proposal_id'])
    last_n_proposal_id = list(range(last_proposal_id - n + 1, last_proposal_id + 1))
    return last_n_proposal_id


async def get_address_votes(lcd_api: str, address: str, session):
    try:
        url = lcd_api + f'/txs?message.action=%2Fcosmos.gov.v1beta1.MsgVote&message.sender={address}&limit=1000000000'
        async with session.get(url) as resp:
            resp = await resp.json()
            if 'txs' not in resp.keys():
                voted_ids = []
            else:
                resp = resp['txs']
                voted_ids = list(set([int(prop['tx']['value']['msg'][0]['value']['proposal_id']) for prop in resp]))
    except Exception as e:
        voted_ids = []
    return voted_ids


async def get_address_voted(lcd_api: str, address: str, last_proposals: list, session):
    address_votes = await get_address_votes(lcd_api, address, session)
    intersection_lists = list(set(last_proposals) & set(address_votes))
    return len(intersection_lists)


async def processor(session, network: dict):
    start = time.time()
    create_table(network)
    validators_df = await get_validators(session, network)
    active_set = await get_active_set(session, network)
    validators_df.drop(validators_df[validators_df.isjailed==True].index, inplace=True)
    validators_df['validator_rank'] = validators_df['staked'].rank(ascending=False, method='dense')
    validators_df['cost_optimization'] = validators_df.apply(lambda x: get_cost_optimization(x['greed']), axis=1)
    validators_df['cost_endorsement'] = validators_df.apply(
        lambda x: get_cost_optimization_endorsement(x['cost_optimization'], validators_df['cost_optimization'].max()), axis=1)
    validators_df['decentralization'] = validators_df.apply(
        lambda x: get_decentralization(x['validator_rank']), axis=1)
    validators_df['decentralization_endorsement'] = validators_df.apply(
        lambda x: get_decentralization_endorsement(x['decentralization'], validators_df['decentralization'].max()), axis=1)
    validators_df['confidence'] = validators_df.apply(
        lambda x: get_confidence(x['ownership']), axis=1)
    validators_df['confidence_endorsement'] = validators_df.apply(
        lambda x: get_confidence_endorsement(x['confidence'], validators_df['confidence'].max()), axis=1)
    validators_df['participation'] = validators_df.apply(
        lambda x: get_participation(x['voted']), axis=1)
    validators_df['participation_endorsement'] = validators_df.apply(
        lambda x: get_participation_endorsement(x['participation'], validators_df['participation'].max()), axis=1)
    validators_df['reliability'] = validators_df.apply(
        lambda x: get_reliability(x['staked'], x['delegator_shares']), axis=1)
    validators_df['reliability_endorsement'] = validators_df.apply(
        lambda x: get_reliability_endorsement(x['reliability'], validators_df['reliability'].max()), axis=1)
    validators_df['total'] = validators_df['cost_endorsement'] + validators_df['decentralization_endorsement'] + \
                         validators_df['confidence_endorsement'] + validators_df['reliability_endorsement'] + \
                         validators_df['participation_endorsement']
    validators_df['rank'] = validators_df['total'].rank(ascending=False, method='dense')
    validators_df = validators_df.sort_values(by=['total'], ascending=False).reset_index(drop=True)
    validators_df['timestamp'] = datetime.utcnow().isoformat()
    validators_df['is_active_set'] = validators_df['validator_rank'].apply(lambda x: True if x in list(range(1, active_set + 1)) else False)
    try:
        old_df = get_network_data(network)
        validators_df['diff'] = validators_df['rank'] - old_df['rank']
        validators_df["diff"] = validators_df["diff"].fillna(0)
    except Exception as e:
        print(e)
        validators_df['diff'] = 0
    save_to_db(network, validators_df)
    stop = time.time()
    print(network['name'], stop - start)