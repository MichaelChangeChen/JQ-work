import Person,{f1,f3} from './person.mjs';
//當設定package.json的type:module時 此為(ES6)
//只要不是default 就全都用大誇號包起來
//import一定放在最前面

//.mjs副檔名，指示檔案為ES6 modules


const p4 = new Person('peter',25);



console.log(p4);
console.log(f1(3));
console.log(f3(3));
