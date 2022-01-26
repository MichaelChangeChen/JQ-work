class Person {
    constructor(name ='noname', age = 0){
        this.name = name;
        this.age = age;
      
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


console.log('person.mjs')
export const f3 = a => a*a;
 const f1 = a => a*a*a;
  
export {f1};

export default Person;


// const p1 = new Person('Bill',23);
// const p2 = new Person('Tina',11);
// const p3 = new Person('Alber',33);
// const p4 = new Person('Amanda',24);

// console.log(p2.sayHello());
// console.log(JSON.stringify(p1.toJSON()));
// console.log(JSON.stringify(p4));