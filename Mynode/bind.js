//bind 的用法： 意思是綁定

let albert = {
    name: 'Albert',
    age: 22
};

function getAge(){
    console.log(this.age);
};

let getAlbertAge = getAge.bind(albert);  // 綁定了albert 這個物件，這樣this 就能抓到 albert 而不會指向 window
//需要用一個變數去接住 bind 回傳的東西，然後在執行它。

getAlbertAge();  // ===  22

//---------------------------------------------------------------------------

//call 的用法： 可以直接執行，不用綁定

let albert1 = {
    name: 'Albert',
    age: 22
};

function getAge(country, city){
    console.log(this.age);
    console.log("I'm from " + country + '.');
    console.log('I live in ' + city + ' city.');
};

getAge.call(albert1, 'Taiwan', 'Taipei');  //其結果是 22   I'm from Taiwan.   I live in Taipei city.
//不需要有變數去接住它，可以直接執行。

//---------------------------------------------------------------------------

//apply 的用法：基本上跟 call 非常類似， 差別只在於後面的參數用array包起來

getAge.apply(albert1, ['Taiwan', 'Taipei']); // 其結果一樣是 22   I'm from Taiwan.   I live in Taipei city.

//---------------------------------------------------------------------------

//何時用 call 何時用 apply ，看當時的參數是怎麼保存的，如果是一個一個分開就用 call ，如果是 array 的話就用 apply