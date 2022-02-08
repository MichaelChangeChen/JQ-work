//區分開路由,以方便管理

const express = require('express');
const db = require('./../modules/connect-db');
//設定express的Router()
const router = express.Router();

async function getListData(req,res){
    const perPage = 5; //每一頁多少筆
    let page = req.query.page || 1; //用戶要看第幾頁 
    if(page < 1){
        return res.redirect('/address_book')
    }
    //輸出
    const output = {
        // success : false,
        perPage,
        page,
        totalRows: 0,
        totalPages: 0,
        rows: [],
    }

    const t_sql = "SELECT COUNT(1) num FROM `address_book`"; //num的值是address_book的總比數
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
        const sql = `SELECT * FROM \`address_book\` LIMIT ${perPage*(page-1)},${perPage}`;
        const [rs2] = await db.query(sql);
        output.rows = rs2; 
    }
    return output;
    // res.json(output);
    // res.render('address-book/list',output);
}

router.get('/list',async (req,res)=>{
res.render('address-book/list', await getListData(req, res));
});
router.get('/api/list', async (req, res)=>{
    res.json(await getListData(req, res));
});
module.exports = router; //將router設為物件做傳送至index.js來接