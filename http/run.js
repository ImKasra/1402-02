let http = require('http');
let port = 80;

let server = http.createServer((req, res) => {
    console.log('request method:', req.method);
    console.log('url:', req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
})

server.listen(port);
console.log("server running on port:", port);