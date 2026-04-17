$body = '{
  "query": "mutation($name: String!) { createRepository(input: {name: $name, visibility: PUBLIC}) { repository { url name } } }",
  "variables": {"name": "Mytegami-ver3.0"}
}'

$headers = @{
    'Authorization' = 'Bearer ghp_MEUrT6YGhU6gZ6hZhHqZqZ6hZhHqZqZ6hZh'
    'Content-Type' = 'application/json'
}

Invoke-RestMethod -Uri 'https://api.github.com/graphql' -Method POST -Headers $headers -Body $body