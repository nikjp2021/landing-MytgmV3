$env:GH_TOKEN = "ghp_MEUrT6YGhU6gZ6hZhHqZqZ6hZhHqZqZ6hZh"

# Create the repo using gh CLI
& ".\gh\bin\gh.exe" repo create mytegami --public --source=. --push --description "Premium MyTegami landing page with high-end UI/UX"