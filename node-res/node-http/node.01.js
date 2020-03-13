const http = require("http");
//新建一个http服务
var server = http.createServer();
//让这个服务监听8080端口
server.listen(8080,function (){
    console.log("监听开始")
})
//让这个服务处理请求事件
server.on("request",function (res,rps){
    console.log(res.method);
    rps.write("hello node!")
    rps.end();
})