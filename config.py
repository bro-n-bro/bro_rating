API_PORT = 5002
API_HOST = "0.0.0.0"

ALLOCATION = 100.0

COST_OPTIMIZATION = 0.20
DECENTRALIZATION = 0.20
CONFIDENCE = 0.20
RELIABILITY = 0.20
PARTICIPATION = 0.20

SQL_PATH = './rating.db'

NETWORKS = [
    {
        "name": "bostrom",
        "lcd_api": "https://lcd.bostrom.bronbro.io",
        "prefix": "bostrom",
        "logo_path": "https://keybase.io/_/api/1.0/user/lookup.json?key_suffix="
    },
    {
        "name": "osmosis",
        "lcd_api": "https://lcd.osmosis-1.bronbro.io",
        "prefix": "osmo",
        "logo_path": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/moniker/"
    },
    {
        "name": "juno",
        "lcd_api": "https://lcd.juno-1.bronbro.io",
        "prefix": "juno",
        "logo_path": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/moniker/"
    },
    {
        "name": "stargaze",
        "lcd_api": "https://lcd.stargaze-1.bronbro.io",
        "prefix": "stars",
        "logo_path": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/moniker/"
    },
    {
        "name": "gravity",
        "lcd_api": "https://lcd.gravity-bridge-3.bronbro.io",
        "prefix": "gravity",
        "logo_path": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/moniker/"
    },
    {
        "name": "crescent",
        "lcd_api": "https://lcd.crescent-1.bronbro.io",
        "prefix": "cre",
        "logo_path": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/moniker/"
    },
    # {
    #     "name": "omniflix",
    #     "lcd_api": "https://lcd.omniflixhub-1.bronbro.io",
    #     "validator": "omniflixvaloper1e8grpphncncw9hrutyvnlv77n5dejwcne58zk4",
    #     "coingecko_api": "omniflix-network",
    #     "prefix": "omniflix",
    #     "base_denom": "uflix",
    #     "exponent": 1_000_000
    # },
    {
        "name": "cosmoshub",
        "lcd_api": "https://lcd.cosmoshub-4.bronbro.io",
        "prefix": "cosmos",
        "logo_path": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/moniker/"
    },
    # {
    #     "name": "desmos",
    #     "lcd_api": "https://lcd.desmos-mainnet.bronbro.io",
    #     "validator": "desmosvaloper1sykf8q94l8q8mqstf64ptuvp74ueyehxpgcq76",
    #     "coingecko_api": "desmos",
    #     "prefix": "desmos",
    #     "base_denom": "udsm",
    #     "exponent": 1_000_000
    # },
    # {
    #     "name": "evmos",
    #     "lcd_api": "https://lcd.evmos-9001-2.bronbro.io",
    #     "validator": "evmosvaloper1ce4vh0e5kanlgc7z0rhcemvd8erjnfzcyfecl7",
    #     "coingecko_api": "evmos",
    #     "prefix": "evmos",
    #     "base_denom": "aevmos",
    #     "exponent": 1_000_000_000_000_000_000
    # },
    {
        "name": "stride",
        "lcd_api": "https://lcd.stride-1.bronbro.io",
        "prefix": "stride",
        "logo_path": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/moniker/"
    },
]


SCHEMA = [
            'moniker',
            'opeartor_address' ,
            'staked',
            'delegator_shares',
            'greed',
            'ownership',
            'voted',
            'isjailed',
            'logo_path',
            'validator_rank',
            'cost_optimization',
            'cost_endorsement',
            'decentralization',
            'decentralization_endorsement',
            'confidence',
            'confidence_endorsement',
            'participation',
            'participation_endorsement',
            'reliability',
            'reliability_endorsement',
            'total',
            'rank',
            'is_active_set',
            'diff',
        ]

