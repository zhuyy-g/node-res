const http = require("http");
const router = require("./router")
var server = http.createServer();

router.bind(server);
server.listen(8080,function (){
    console.log("请访问127.0.0.1:8080");
})