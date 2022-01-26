// 1 - 載入 Node.js 原生模組 http
const http = require('http');


// 2 - 建立server
const server = http.createServer((req,res) =>{
       // 在此處理 客戶端向 http server 發送過來的 req。
    console.log('req.url',req.url);

    // response.writeHead(statusCode[, statusMessage][, headers])
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.write(`<div>222223</div>`);
    res.end(`<h2>Hola</h2>
    <p>${req.url}</p>
    `);


});
server.listen(3000);