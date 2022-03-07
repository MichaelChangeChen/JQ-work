const jwt = require('jsonwebtoken')
const key = 'jdfkdf7593845UUIGOIP09345';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOjEsImFjY291bnQiOiJtaWNoYWVsIiwiaWF0IjoxNjQ2NjQxOTM5fQ.f21l_eDUHrDfh8Kf4B3Tm8eTTgSGKHtogHxxlcKaYYo';
let oriData
try{
    oriData = jwt.verify(token, key)
}catch(ex){

    console.log({ex})
}
console.log(oriData)