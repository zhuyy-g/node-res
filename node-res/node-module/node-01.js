var http = require('http');
var server = http.createServer();
var luyou = require('./node-02');

luyou.server(server);
server.listen(8080,function (){
    console.log("现在可以请求8080端口了！")
})