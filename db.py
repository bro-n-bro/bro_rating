import sqlite3
import pandas as pd


from config import SQL_PATH


def connection_wrapper(func):
    def open_close_connection(*args, **kwargs):
        con = sqlite3.connect(SQL_PATH)
        cur = con.cursor()
        func(cur, *args, **kwargs)
        con.commit()
        con.close()
    return open_close_connection


@connection_wrapper
def create_table(cur, network):
    cur.execute(f'''CREATE TABLE IF NOT EXISTS {network['name']} (
        timestamp time,
        moniker text,
        opeartor_address text,
        staked number,
        delegator_shares number,
        greed number,
        ownership number,
        voted number,
        isjailed bool,
        validator_rank number,
        cost_optimization number,
        cost_endorsement number,
        decentralization number,
        decentralization_endorsement number,
        confidence number,
        confidence_endorsement number,
        participation number,
        participation_endorsement number,
        reliability number,
        reliability_endorsement number,
        total number,
        rank number,
        diff number
    )''')


def save_to_db(network, validators_df):
    con = sqlite3.connect(SQL_PATH)
    validators_df.to_sql(network['name'], con, if_exists='replace', index=False)
    con.commit()
    con.close()


def get_network_data(network):
    con = sqlite3.connect(SQL_PATH)
    df = pd.read_sql_query(f"SELECT * FROM {network['name']}", con)
    con.commit()
    con.close()
    return df


def get_network_api_data(network, limit) -> tuple:
    con = sqlite3.connect(SQL_PATH)
    df = pd.read_sql_query(
        f"SELECT moniker, operator_address, staked, greed, ownership, voted, validator_rank, total, rank, diff, timestamp FROM {network} LIMIT {limit}", con)
    timestamp = df['timestamp'].loc[0]
    df = df.drop(['timestamp'], axis=1)
    con.commit()
    con.close()
    return timestamp, df.values.tolist()


def get_validator_api_data(network, validator) -> tuple:
    con = sqlite3.connect(SQL_PATH)
    df = pd.read_sql_query(
        f"SELECT moniker, operator_address, staked, greed, ownership, voted, validator_rank, total, rank, diff, timestamp FROM {network} WHERE operator_address=\"{validator}\"", con)
    timestamp = df['timestamp'].loc[0]
    df = df.drop(['timestamp'], axis=1)
    con.commit()
    con.close()
    return timestamp, df.values.tolist()