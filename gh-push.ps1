$ErrorActionPreference = "Stop"

$token = "ghp_MEUrT6YGhU6gZ6hZhHqZqZ6hZhHqZqZ6hZh"
$repo = "Mytegami-ver3.0"
$user = "nikhil-cryptomite"

$headers = @{
    "Authorization" = "Bearer $token"
    "Accept" = "application/vnd.github+json"
    "X-GitHub-Api-Version" = "2022-11-28"
}

$body = @{
    name = $repo
    description = "Premium MyTegami landing page with high-end UI/UX"
    private = $false
    auto_init = $false
} | ConvertTo-Json

Write-Host "Creating repository..."
try {
    $resp = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method POST -Headers $headers -Body $body
    Write-Host "Created: $($resp.html_url)"
} catch {
    Write-Host "Repo may exist, continuing..."
}

Set-Location "C:\Users\nikhi\Desktop\Rest34"
$url = "https://${token}@github.com/${user}/${repo}.git"
git remote set-url origin $url
git push -u origin master