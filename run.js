const http = require('http');
let port = 80;

let server = http.createServer((request, response) => {
    console.log("Request method:", request.method);
    console.log("URL:", request.url);
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.write('this is a test');
    response.end();
})

server.listen(port);
console.log("Server is running on port:", port);