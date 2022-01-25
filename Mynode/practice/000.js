const test =(function (){
    // console.log(count)
    let count = 0; 
    let aaa = 0
    console.log('aaa',aaa++)
    return function() {
        console.log(count++);
    }
}
)();

const test1 =test;
const test2 =test;

test();
test1();
test2();


