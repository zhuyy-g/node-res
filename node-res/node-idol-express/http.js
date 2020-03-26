const express = require("express");
const router = require("./router.js");
const cs = require("cookie-session");

var app = express();

//app.use(express.static('public'));
app.engine('html',require('express-art-template'));
//app.use(xxx)是express框架用来调用中间件的方法
app.use(cs({
    name:"sessionID",
    keys:['sessionValue']
}));

app.use(router);

app.listen(8081,function(){
    console.log("现在可以访问8081端口了");
})