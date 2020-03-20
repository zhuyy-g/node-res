const mysql = require("mysql");

var connection  = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'idol'
})

connection.connect();

var sql = 'select * from idol where id = 1';
connection.query(sql,function (err,res,filed) {
    console.log(err);
    console.log('------------------------------');
    console.log(res);
    console.log('------------------------------');
    console.log(filed);
})