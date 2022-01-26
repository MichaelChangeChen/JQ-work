const obj = require('./person');

const {Person} = require('./person');
//在第二次require時會比對是否有require過
//若有就只做一次


const p2 = new obj.Person('peter',25);
const p3 = new Person('peter',25);


console.log(obj);
console.log(p2);
console.log('單require:',p3);
console.log(obj.f3(9));
