const http = require('http');

const fs = require('fs').promises;
// response.writeHead(statusCode[, statusMessage][, headers])
const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8;'
    });
    try {
        await fs.writeFile('./practice/headers2.txt', JSON.stringify(req.headers, null, 4))
    } catch (ex) {
        return res.end('error', ex);
    }
    res.end('ok');
});
server.listen(3000);