const fs = require("fs");
//用Promise来处理异步函数的方法(将异步函数写在Promise类的回调函数中)
//内部函数处理成功结果返回到res,失败结果返回到rej
var pro = new Promise(function(res,rej){
    fs.readFile('./a.txt',"utf8",function(err,data){
        if(!err){
            res(data);
        }else{
            rej(err);
        }
    })
})
//pro.then对应的是pro.then(res,rej),data当中存储的是结果
pro.then(function (data){
    console.log(data);
},function (err){
    console.log(err);
})
