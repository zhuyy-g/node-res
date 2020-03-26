const express = require("express");
const app = express();
app.listen(8000,function(){
    console.log("现在可以访问8000端口了！")
})
//这是express框架处理请求的方法,同下
// server.on("request",(req,res)=>{
//     var urlObj = url.parse(req.url,true);
//     var method = req.method;
//     if(method == "GET"){
//         if(urlObj.pathname == "/"){
//             res.end("Hello World!!!")
//         }
//     }
// })
app.get("/",function(req,res){
    res.send("Hello World!!!")  
})