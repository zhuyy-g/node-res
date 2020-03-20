const fs = require("fs");

function fun(file){
    return new Promise(function(res,rej){
        fs.readFile(file,"utf8",function(err,data){
            if(!err){
                res(data);
            }
        })
    })
}

fun("./a.txt").then(function (data){
    console.log(data);
    return(fun("./b.txt"));
}).then(function (data){
    console.log(data);
    return(fun('./c.txt'));
}).then(function(data){
    console.log(data);
})
