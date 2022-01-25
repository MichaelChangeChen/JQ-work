const http = require('http');
// response.writeHead(statusCode[, statusMessage][, headers])
const server = http.createServer((req,res) =>{
    console.log('req.url',req.url);
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.write(`<div>222223</div>`);
    res.end(`<h2>Hola</h2>
    <p>${req.url}</p>
    `);


});
server.listen(3000);