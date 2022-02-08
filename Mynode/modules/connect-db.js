
const mysql = require('mysql2');
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,   // 無可用連線時是否等待pool連線釋放(預設為true)
    connectionLimit:7,  // 連線池可建立的總連線數上限(預設最多為10個連線數)
    queueLimit:0
    
});
module.exports = pool.promise();


// init參數說明 :
// ispool: 是否以連接池的方式初始化 (default:true) 
// host: host地址 (default:’127.0.0.1') 
// user: 用戶名 (default:’root’) 
// password: 數據庫密碼 (default:’root’) 
// database: 使用的數據庫 (default:’test’) 
// port: 端口 (default:’3306') 
// waitConnection: 是否等待鏈接(連接池時使用) (default:true) 
// connectionLimit: 連接池大小 (default:10) 
// queueLimit: 排隊限制 (default:0)