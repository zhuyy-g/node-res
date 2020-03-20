const fs = require("fs");
//如果有多个这样的异步方法需要执行，需要在回调函数里进行嵌套，嵌套多了可能产生回调地狱的情况
fs.readFile("./a.txt","utf8",function(err,data){
    console.log(data);
    fs.readFile("./b.txt","utf8",function(err,data){
        console.log(data);
        fs.readFile("./c.txt","utf8",function(err,data){
            console.log(data);
        })
    })
})