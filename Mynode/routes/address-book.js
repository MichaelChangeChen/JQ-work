//區分開路由,以方便管理

const express = require('express');
const db = require('./../modules/connect-db');
const upload = require('./../modules/upload-imgs');

//設定express的Router()
const router = express.Router();

async function getListData(req,res){
    const perPage = 5; //每一頁多少筆
    let page = req.query.page ? parseInt(req.query.page) : 1; //用戶要看第幾頁 
    if(page < 1){
        return res.redirect('/address_book')
    }
    const conditions = {};  // 傳到 ejs 的條件
    let search = req.query.search ? req.query.search : '';
    search = search.trim(); // 去掉頭尾空白
    let sqlWhere = ' WHERE 1 ';
    if(search){
        sqlWhere += ` AND \`name\` LIKE ${db.escape('%'+search+'%')} `;
        conditions.search = search;
    }
    //輸出
    const output = {
        // success : false,
        perPage,
        page,
        totalRows: 0,
        totalPages: 0,
        rows: [],
        conditions
    }
    //num的值是address_book的總比數
    const t_sql = `SELECT COUNT(1) num FROM address_book ${sqlWhere} `;
    // return res.send(t_sql); // 除錯用

  
    const [rs1] = await db.query(t_sql);
    const totalRows = rs1[0].num; //取得總比數的值
    let totalPages = 0;
    if(totalRows) {
        output.totalPages = Math.ceil(totalRows/perPage);
        output.totalRows = totalRows;
        if(page>output.totalPages){
            //最後一頁
            return res.redirect(`/address_book/list?page=${output.totalPages}`);        
        }
        //下方的sql需要用\跳脫
        const sql = `SELECT * FROM \`address_book\` ${sqlWhere} ORDER BY sid DESC LIMIT ${perPage*(page-1)}, ${perPage} `;
        const [rs2] = await db.query(sql);


        rs2.forEach(el=>{
             let str = res.locals.toDateString(el.birthday);
            if(str === 'Invalid date'){
                el.birthday = '沒有輸入資料';
            } else {
                el.birthday = str;
            }

        });
        output.rows = rs2;
    }

    return output;

    // res.json(output);
    // res.render('address-book/list',output);
}
router.get('/', async (req, res)=>{
    res.redirect('/address-book/list');
});
router.get('/list', async (req, res)=>{
    res.render('address-book/list', await getListData(req, res));
});
router.get('/api/list', async (req, res)=>{
    res.json(await getListData(req, res));
});


router.get('/api/auth-list', async (req, res)=>{
    if(res.locals.auth && res.locals.auth.account){
        return res.json({...await getListData(req, res),account:res.locals.auth.account})
    }else{
        res.json({success: false, error: '沒有授權'});
    }
   
});

router.get('/add', async (req, res)=>{
    res.render('address-book/add');
});
//要POST內容要用upload的方式,所以必須在上方先做require('./../modules/upload-imgs')一個middleware
// none()不做上傳檔案
// multipart/form-data
router.post('/add2', upload.none(), async (req, res)=>{
    res.json(req.body);
});
// application/x-www-form-urlencoded
// application/json
router.post('/add', async (req, res)=>{

    const output = {
        success: false,
        error: ''
    };
    
    /*const sql = "INSERT INTO address_book SET ?";
    //obj用意  原本有的欄位req.body   reated_at:new Data()補上新的(建立時間)欄位
    const obj = {...req.body,created_at:new Date()};
    const[result] = await db.query(sql,[obj]);*/

    const sql = "INSERT INTO `address_book`(`name`, `email`, `mobile`, `birthday`, `address`, `created_at`) VALUES (?, ?, ?, ?, ?, NOW())";
    const [result] = await db.query(sql, [
        req.body.name,
        req.body.email,
        req.body.mobile,
        req.body.birthday || null,
        req.body.address,
    ]);
    console.log(result);
    output.success = !! result.affectedRows;  //affectedRows(新增成功會顯示1(新增1筆資料)) 
    // !! result.affectedRows 轉為布林值
    output.result = result;
    
    res.json(output);
});


router.get('/delete/:sid', async (req, res)=>{
    const sql = "DELETE FROM address_book WHERE sid=?";
    const [result] = await db.query(sql, [req.params.sid]);
    res.redirect('/address-book/list');
});

router.get('/edit/:sid', async (req, res)=>{
    const sql = "SELECT * FROM address_book WHERE sid=?";
    const [rs] = await db.query(sql, [req.params.sid]);
if(! rs.length){
    return res.redirect('/address-book/list');
}
    res.render('address-book/edit',rs[0]);
});

router.post('/edit/:sid', async (req, res)=>{

    const output = {
        success:false,
        error:''
    }
    const sql = "UPDATE `address_book` SET ? WHERE sid=?";
    const [result] = await db.query(sql,[req.body,req.params.sid]);
    console.log(result);
    output.success = !! result.changedRows; 
    //若資料沒有修改result.changedRows;會是0  
    //!! result.changedRows;轉為布林值為false
    output.result = result;
    res.json(output);
    });

module.exports = router; //將router設為物件做傳送至index.js來接