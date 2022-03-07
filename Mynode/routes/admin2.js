//區分開路由,以方便管理
const express = require('express');
//設定express的Router()
const router = express.Router();


//=====================REACT myform=============
const upload = require('./../modules/upload-imgs');
const db = require('./../modules/connect-db');
const res = require('express/lib/response');
//=====================REACT myform=============


// 自訂的 middleware 了解next()的用法
router.use((req, res, next)=>{
    res.locals.shin += 'test2';
    next();
});
//=====================REACT myform=============
router.get('/myform/:sid',async (req,res)=>{
  
    const sid = parseInt(req.params.sid) || 0 ;
    const [rs] = await db.query(`SELECT account,avatar,nickname FROM admins WHERE sid=${sid}`)
    res.json(rs)
})

router.put('/myform/:sid',upload.single('avatar'),async (req,res)=>{
    let modifyAvatar = '';
    if(req.file && req.file.filename){
        modifyAvatar = `,avatar='${req.file.filename}'`
    }
    const sql = `UPDATE admins SET nickname=? ${modifyAvatar} WHERE sid=?`
    const result = await db.query(sql,[req.body.nickname,req.params.sid])
    res.json(result)
})
//=====================REACT myform=============

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
