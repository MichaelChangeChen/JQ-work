const f1 = a => a*a;

console.log('fun01:',f1(3));

//匯出f1
// module.exports 通常寫在最後面
module.exports = f1;