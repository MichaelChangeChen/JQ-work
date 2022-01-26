//NODE_ENV 在.env裡 是可以自己取名子做為不同的
console.log(process.env.NODE_ENV);
//抓.env的內容
require('dotenv').config();
console.log(require('dotenv').config());
// 1. 引入express
const express = require('express');

// 2. 建立web server 物件
const app = express();

// 註冊樣版引擎
app.set('view engine','ejs');

//放在所有路由設定的前面
app.use(express.static('public'));

// 3. 路由設定  只接受GET的方法
app.get('/',(req,res)=>{
    //render()呈現樣板
    res.render('home',{name:'Michael'});

});

//只接受USE的方法
app.use((req,res)=>{
    res.status(404).send('<h1 style="color:red">404唷~</h1>');
})

//判斷.evn檔案裡是否有給PORT 若沒有就給3001
const port = process.env.PORT || 3001;

// 4. Server 偵聽
app.listen(port,()=>{
    console.log(`啟動server 偵聽埠號 ${port} - `, new Date());
});