LCD_API = ':1317'
GRAPHQL_API = ':8080/v1/graphql'
HEADERS = {
        'content-type': 'application/json',
        "authorization": ''
}
QUERY = '''{
  pre_commits_50000 {
    operator_address
    pre_commits
  }
}'''

POSTGRES_USER_NAME = ''
POSTGRES_DB_NAME = ''
POSTGRES_DB_PORT = ''
POSTGRES_DB_HOST = ''
POSTGRES_DB_PASSWORD = ''
