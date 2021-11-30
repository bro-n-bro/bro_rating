LCD_API = 'http://136.243.176.155:1317'
GRAPHQL_API = 'http://195.201.168.245:8080/v1/graphql'
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