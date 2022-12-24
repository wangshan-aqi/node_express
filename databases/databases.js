const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Chang521',
    database: 'test_mysql'
})
// connection.connect()
// 对数据库进行增删改查的操作
function query(sql, callback) {
    pool.getConnection(function(err, connection) {
        // 错误记录
        connection.query(sql, function(err, rows) {
            callback(err, rows)
            connection.release()
        })
    })
}

exports.query = query;
