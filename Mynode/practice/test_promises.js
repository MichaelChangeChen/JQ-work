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