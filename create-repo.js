const https = require('https');

const data = JSON.stringify({
  name: "Mytegami-ver3.0",
  description: "Premium MyTegami landing page with high-end UI/UX",
  private: false,
  auto_init: false
});

const options = {
  hostname: 'api.github.com',
  path: '/user/repos',
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + Buffer.from('nikhil-cryptomite:ghp_MEUrT6YGhU6gZ6hZhHqZqZ6hZhHqZqZ6hZh').toString('base64'),
    'Accept': 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log(body));
});

req.on('error', (e) => console.error(e));
req.write(data);
req.end();