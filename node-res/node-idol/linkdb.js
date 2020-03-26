const mysql = require("mysql");

var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'idol'
})

connection.connect();

// module.exports.link = function(call){
//     var sql = 'select * from idol';
//     connection.query (sql,function (err,db_data){
//         call(db_data);
//     })
// }

// module.exports.query = function(id,call) {
//     var sql = 'select * from idol where id = ' + id;
//     connection.query (sql,function (err,db_data){
//         call(db_data);
//     })
// }

module.exports = {
    wh: "",
    where: function(wh){
        this.wh = wh;
        return this;
    },
    select: function(call){
        var sql ="";
        if(this.wh == undefined) {
            sql = "select * from idol"
        }else {
            sql = "select * from idol where " + this.wh
        }
        connection.query (sql,function (err,db_data){
            call(db_data);
        })
    },
    update: function(data,call){
        if(this.wh == undefined){
            console.log("请加上where条件");
            return;
        }else{
            var set = "";
            for(i in data) {
                set += i + "='" + data[i] + "',"
            }
            set = set.slice(0,set.length - 1);
            var sql = "update idol set " + set + " where " + this.wh;
            console.log(sql);
            connection.query (sql,function (err,db_data){
                call(db_data.changedRows);
            })
        }
    },
    delete: function(call){
        if(this.wh == undefined){
            console.log("请加上where条件");
            return;
        }else{
            var sql = "delete from idol where " + this.wh;
            connection.query(sql,function(err,db_data){
                call(db_data.changedRows)
            })
        }
    },
    add: function(data,call){
        var db_data = "";
        for(var i in data){
            db_data += "'"+data[i] +"',";
        }
        db_data = db_data.slice(0,db_data.length - 1);
        console.log(db_data);
        var sql = 'insert into idol (name,ability,sex) values (' + db_data + ')';
        console.log(sql);
        connection.query(sql,function(err,db_data){
            call(db_data.changedRows);
        })
    }
}