import pandas as pd
import requests
import time

from config import LCD_API
from cyberpy._wallet import address_to_address
from functools import reduce

MAX_TOTAL_POINTS = 100

criteria_weight_ascending_max_value_list = [
    ('proposals_voted', 0.25, False, 5),
    ('self_delegation', 0.13, False),
    ('tokens', 0.10, False),
    ('tokens_bluring', 0.20, False),
    ('identity', 0.02, False, 1),
    ('website', 0.01, False, 1),
    ('security_contact', 0.01, False, 1),
    ('details', 0.01, False, 1),
    ('commission_rate', 0.05, True),
    ('max_commission_rate', 0.03, False),
    ('max_commission_change_rate', 0.01, True),
    ('min_self_delegation', 0.03, False)
    # todo add precommits
]


criteria_function_dict = {
    'points_rank_average_scheme': ['min_self_delegation', 'tokens_bluring', 'commission_rate', 'max_commission_rate', 'max_commission_change_rate'],
    'points_weighted_by_max': ['self_delegation', 'tokens'],
    'points_weighed_by_max_available': ['proposals_voted', 'identity', 'website', 'security_contact', 'details']
}


def get_validators_df():
    url = LCD_API + '/staking/validators'
    validators_raw = requests.get(url).json()['result']
    validators_list = []
    for validator in validators_raw:
        self_delegator_address = address_to_address(validator['operator_address'], 'osmo')
        self_delegation = get_self_delegation(self_delegator_address, validator['operator_address'])
        proposals_voted = get_address_voted(self_delegator_address, 5)
        temp = (
            validator['description']['moniker'],
            validator['operator_address'],
            self_delegator_address,
            float(proposals_voted),
            float(self_delegation),
            float(validator['tokens']),
            float(validator['tokens']) / float(validator['delegator_shares']),
            float(bool(validator['description']['identity'])) if 'identity' in validator['description'].keys() else 0,
            float(bool(validator['description']['website'])) if 'website' in validator['description'].keys() else 0,
            float(bool(validator['description']['security_contact'])) if
                'security_contact' in validator['description'].keys() else 0,
            float(bool(validator['description']['details'])) if 'details' in validator['description'].keys() else 0,
            float(validator['commission']['commission_rates']['rate']),
            float(validator['commission']['commission_rates']['max_rate']),
            float(validator['commission']['commission_rates']['max_change_rate']),
            float(validator['min_self_delegation'])
        )
        validators_list.append(temp)
        time.sleep(2)
    # todo add precommits
    columns = ['moniker', 'operator_address', 'self_delegator_address'] + \
              [criterion[0] for criterion in criteria_weight_ascending_max_value_list]
    return pd.DataFrame(validators_list, columns=columns)


def get_self_delegation(delegator_address: str, validator_address: str):
    url = LCD_API + f'/staking/delegators/{delegator_address}/delegations/{validator_address}'
    res = requests.get(url).json()['result']
    return float(res['balance']['amount'])


def get_last_n_proposal_id(n: int):
    url = LCD_API + '/gov/proposals'
    res = requests.get(url).json()['result']
    res = [prop for prop in res if prop['status'] != 2]
    last_proposal_id = int(res[-1]['id'])
    last_n_proposal_id = list(range(last_proposal_id - n + 1, last_proposal_id + 1))
    return last_n_proposal_id


def get_address_votes(address: str):
    url = LCD_API + f'/txs?message.action=vote&message.sender={address}'
    res = requests.get(url).json()
    if 'txs' not in res.keys():
        voted_ids = []
    else:
        res = res['txs']
        voted_ids = list(set([int(prop['tx']['value']['msg'][0]['value']['proposal_id']) for prop in res]))
    return voted_ids


def get_address_voted(address: str, n: int):
    last_n_proposal_list = get_last_n_proposal_id(n)
    address_votes = get_address_votes(address)
    intersection_lists = list(set(last_n_proposal_list) & set(address_votes))
    return len(intersection_lists)


def get_points_rank_average_scheme(df, column: str, max_points: float, ascending=False):
    df = df[['moniker', column]]
    df = df.sort_values(by=[column], ascending=ascending)
    df['rank'] = df[column].rank(method='dense', ascending=False)
    points_list = get_points_list(df, max_points)
    df['raw_points'] = points_list
    df[column] = df.groupby('rank').transform('mean')['raw_points']
    return df[['moniker', column]]


def get_points_weighted_by_max(df, column: str, max_points: float, ascending=False):
    df = df[['moniker', column]]
    df = df.sort_values(by=[column], ascending=ascending)
    max_value = df[column].max()
    df['raw_points'] = df[column] / max_value * max_points
    df[column] = df['raw_points']
    return df[['moniker', column]]


def get_points_weighed_by_max_available(df, column: str, max_points: float, max_value: float, ascending=False):
    df = df[['moniker', column]]
    df = df.sort_values(by=[column], ascending=ascending)
    df['raw_points'] = df[column] / max_value * max_points
    df[column] = df['raw_points']
    return df[['moniker', column]]


def get_points_list(df, max_points: float):
    items = df.shape[0]
    step = max_points / items
    points_list = []
    while max_points >= step - 0.000000001:
        points_list.append(max_points)
        max_points -= step
    return points_list


def get_ranked_df():
    df = get_validators_df()
    criterion_dfs_list = []
    for criterion in criteria_weight_ascending_max_value_list:
        if criterion[0] in criteria_function_dict['points_rank_average_scheme']:
            criterion_df = get_points_rank_average_scheme(df, criterion[0], criterion[1] * MAX_TOTAL_POINTS,
                                                          ascending=criterion[2])
        elif criterion[0] in criteria_function_dict['points_weighted_by_max']:
            criterion_df = get_points_weighted_by_max(df, criterion[0], criterion[1] * MAX_TOTAL_POINTS,
                                                      ascending=criterion[2])
        else:
            criterion_df = get_points_weighed_by_max_available(df, criterion[0], criterion[1] * MAX_TOTAL_POINTS,
                                                               criterion[3], ascending=criterion[2])
        criterion_dfs_list.append(criterion_df)
    result = reduce(lambda left, right: pd.merge(left, right, on=['moniker'],
                                                    how='inner'), criterion_dfs_list)
    result['result'] = result.sum(axis=1)
    result = result.sort_values(by=['result'], ascending=False).reset_index(drop=True)
    result.to_csv('./result.csv')
    df.to_csv('./criteria.csv')
    return result