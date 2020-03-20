const fs = require("fs");

var pro = new Promise(function(res,rej){
    fs.readFile('./a.txt',"utf8",function(err,data){
        if(!err){
            res(data);
        }else{
            rej(err);
        }
    })
})

pro.then(function (data){
    console.log(data);
},function (err){
    console.log(err);
})
