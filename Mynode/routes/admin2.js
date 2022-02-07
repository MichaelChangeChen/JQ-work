//區分開路由,以方便管理
const express = require('express');
//設定express的Router()
const router = express.Router();


// 自訂的 middleware 了解next()的用法
router.use((req, res, next)=>{
    res.locals.shin += 'test2';
    next();
});

router.get('/', (req, res)=>{
    res.send('admin2: root');
});

router.get('/abc', (req, res)=>{
    res.json({
        originalUrl: req.originalUrl,
        'locals.qqq': res.locals.qqq
    });
});
router.get('/def', (req, res)=>{
    res.json({
        originalUrl: req.originalUrl,
        'locals.qqq': res.locals.qqq
    });
});


//-------admin2---------

router.get('/:p1?/:p2?', (req, res) => {
   
    let {
        params,
        url,
        originalUrl,
        baseUrl,
    } = req;
    
    res.json({
        params,
        url,
        originalUrl,
        baseUrl,
        'locaol.qqq':res.locals.qqq,//自訂的middleware
    });
    
    //送出後
    //params	
    // p1	"www"
    // p2	"222"
    // url	"/www/222"
    // originalUrl	"/admin2/www/222"
    // baseUrl	"/admin2"  (在index.js裡先設定了  app.use('/admin2',require('./routes/admin2'));)
});
module.exports = router; //將router設為物件做傳送至index.js來接
