const http = require('http');

const fs = require('fs').promises;
// response.writeHead(statusCode[, statusMessage][, headers])
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8;'
    });
    fs.writeFile('./practice/headers.txt', JSON.stringify(req.headers, null, 4))
        .then(() => {
            res.end('ok');

        });

});
server.listen(3000);