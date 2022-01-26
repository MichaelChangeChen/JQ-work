class Person {
    constructor(name ='noname', age = 0){
        this.name = name;
        this.age = age;
        //抓取了所有有new Person()的名子
        console.log('第一次CONSOLE',name);
    }
    toJSON(){
        return{
            name: this.name,
            age:this.age,
        }
    }
    
    sayHello(){
        return`Hello ${this.name}`;
    }
}


console.log('person.js')
const f3 = a => a*a;

//用object包起來傳送
module.exports ={Person,f3};


// const p1 = new Person('Bill',23);
// const p2 = new Person('Tina',11);
// const p3 = new Person('Alber',33);
// const p4 = new Person('Amanda',24);

// console.log(p2.sayHello());
// console.log(JSON.stringify(p1.toJSON()));
// console.log(JSON.stringify(p4));