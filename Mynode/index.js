//NODE_ENV 在.env裡 是可以自己取名子做為不同的
// console.log(process.env.NODE_ENV);
//抓.env的內容
require('dotenv').config();
// console.log(require('dotenv').config());
// 1. 引入express
const express = require('express');


//呼叫multer
const multer = require('multer');
//dest目的地
// const upload = multer({dest:'tmp_uploads/'})
const upload = require(__dirname + '/modules/upload-imgs');


//.promises 才可以使用 async  await
const fs = require('fs').promises;



// 2. 建立web server 物件
const app = express();

// 註冊樣版引擎
app.set('view engine', 'ejs');

//middleware 是這支urlencoded  (夜店保安,一開始就先過濾)
app.use(express.urlencoded({ extended: false }));
//第二次過濾 只接受json
app.use(express.json());

//放在所有路由設定的前面
app.use(express.static('public'));

//自訂的middleware(過濾器)
app.use((req,res,next)=>{

    res.locals.qqq = 'hello';
    // res.send('oooo'); // 回應之後, 不會往下個路由規則
    next();
})

// 3. 路由設定  只接受GET的方法
app.get('/', (req, res) => {
    //render()呈現樣板
    res.render('home', { name: 'Michael' });

});

//這段不太明白-------------------------
app.get('/a/b', (req, res) => {
    //render()呈現樣板
    res.render('home', { name: 'Michael' });
});
//-------------------------
//-------------json-sales--------------
//抓取  json陣列
app.get('/json-sales', (req, res) => {
    //require進來時就已經會是陣列
    //放入sales
    const sales = require('./data/sales');
    // const sales = [];


    // if((req.query.orderByCol= 'age') && (req.query.orderByRule='desc')){
    //     console.log('oookkk')
    //     sales = sale.age.sort((a,b)=> a-b);
    //     res.render('json-sales',{sales})
    // }else{
    //     console.log('nnnoooo')
    // }
    // TODO:排序
    //req.query.orderByCol = age
    //req.query.orderByRule = desc
    const col = req.query.orderByCol
    const rule = req.query.orderByRule

    if (col = 'name') {

    }
    console.log(req.query);
    // res.render('json-sales',{sales})
    // console.log(sales); 
    //send()的是傳字串
    // res.send(sales[1].name);
    res.render('json-sales', { sales });
});
//----------------------------------------
///-------------try-qs----------query
app.get('/try-qs', (req, res) => {
    res.json(req.query);
})
///------------------------------
///--------------try-post----------
app.post('/try-post', (req, res) => {
    res.json(req.body);
})
///--------------------------------
//---------/try-post-form-------------

app.get('/try-post-form', (req, res) => {
    res.render('try-post-form');
});
app.post('/try-post-form', (req, res) => {
    res.render('try-post-form', req.body);
});
//-------------------------------------
//----------------try-upload-----------------
app.post('/try-upload', upload.single('avatar'), async (req, res) => {
    res.json(req.file);

    // const types = ['image/jpeg','image/png'];
    // const f = req.file;
    // if(f && f.originalname){
    //.includes  選取array中的雙物件
    // if(types.includes(f.mimetype)){
    //.rename重新寫路徑
    //             await fs.rename(f.path, __dirname +'/public/img/'+ f.originalname);
    //             return res.redirect('/img/' + f.originalname);
    //         }else{
    //             return res.send('檔案不符合')
    //         }
    //     }
    //     res.send('bad');
});
//-------------------------------------
//----------------try-uploads-----------------
//上傳多個資料
app.post('/try-uploads', upload.array('photos'), async (req, res) => {

    const result = req.files.map(({ mimetype, filename, size }) => {
        return { mimetype, filename, size };
    });
    res.json(result);

    // res.json(req.files);
});
//-------------------------------------
//----------------my-params-----------------
//: 冒號之後為代稱名
app.get('/my-params1/:action/:id', (req, res) => {
    res.json(req.params);
})

//? 為選擇性的
app.get('/my-params2/:action?/:id?', (req, res) => {
    res.json(req.params);
})

//* 為wildcard 不建議使用
app.get('/my-params3/*/*?', (req, res) => {
    res.json(req.params);
})
//-------------------------------------
//----------------m0923-903-903-----------------
//get手機號碼找資料庫  ^自首(行首)   i不區分大小寫 最前面第一個(/)與最後一個(/)是判斷regular
app.get(/^\/m\/09\d{2}-?\d{3}-?\d{3}$/i, (req, res) => {
    let u = req.url.split('?')[0];//split從問號開始切割 會得到兩個物件(?號前與?號後),拿取[0](問號前的物件)
    u = u.slice(3); //從字串第三個開始算起(去除掉/m/)
    //用空字串取代所有的字串  如同// u = u.split('-').join('');  //g為全域的(replace只會取的一次 後面+ g 會改變所有想取代的字串)
    u = u.replace(/-/g, ''); //replace代替

    // res.json({url: req.url});
    res.json({ mobile: u });
})
//-------------------------------------
//--------------抓取./routes/admin2' -----------

app.use('/admin2',require('./routes/admin2'));



//-------------------------------------

//只接受USE的方法
app.use((req, res) => {
    res.status(404).send('<h1 style="color:red">404唷~</h1>');
})

//判斷.evn檔案裡是否有給PORT 若沒有就給3001
const port = process.env.PORT || 3001;

// 4. Server 偵聽
app.listen(port, () => {
    console.log(`啟動server 偵聽埠號 ${port} - `, new Date());
});