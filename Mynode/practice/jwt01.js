const jwt = require('jsonwebtoken')

const t = jwt.sign({name:'coolman'},'asdzxc');

console.log(t);
console.log(jwt.verify(t,'asdzxc'));