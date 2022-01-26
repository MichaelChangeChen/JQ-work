// 1 - 載入 Node.js 原生模組 http
const http = require('http');
const fs = require('fs');

function myReadFile(my_file){
    return new Promise((resolve,reject)=>{
        fs.readFile(my_file,(error,data)=>{
            if (error){
                return reject(error);
            }else{
                resolve(data);
            }
        })
    })
}   
const server = http.createServer(async (req,res)=>{
    const data = await myReadFile('./practice/headers.txt') ;
    res.writeHead(200,{'Content-Type':'application/json;charset=utf-8;'});
    res.end(data);
});
server.listen(3000);