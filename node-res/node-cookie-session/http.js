const express = require("express");
const cs = require("cookie-session");

var app = express();
//express框架声明cookie中间件的方法
app.use(cs({
    name:"sessionID",
    keys:['sessionValue']
}))
//页面接收到登录请求，判断用户信息，并将cookie写入服务器，返回客户端的一系列操作
app.get("/upLogin",(req,res)=>{
    //1.获取用户提交的数据
    //2.链接数据库，如果有就是正确的登录
    var userinfo = {name:"zhuyy-g",age:24};
    //将这个用户的信息写入服务器，并返回客户端（每个客户必然是单独的，不会重复）
    req.session.session_data = userinfo;
    res.end("写入成功");
})

app.listen(8080,()=>{
    console.log("现在可以访问8080端口了")
})