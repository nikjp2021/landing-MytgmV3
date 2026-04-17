$token = "ghp_MEUrT6YGhU6gZ6hZhHqZqZ6hZhHqZqZ6hZh"
$base64Token = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("nikhil-cryptomite:$token"))

$headers = @{
    "Authorization" = "Basic $base64Token"
    "Accept" = "application/vnd.github+json"
}

$body = @{
    name = "mytegami"
    private = $false
    description = "Premium MyTegami landing page with high-end UI/UX"
    auto_init = $true
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method POST -Headers $headers -Body $body -ContentType "application/json"
    Write-Host "Repository created: $($response.html_url)"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    $_.Exception.Response | Get-ResponseBody
}