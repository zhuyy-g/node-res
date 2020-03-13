const fs = require("fs");
fs.writeFile("./tt.txt","好好学习，天天向上",function (error){
    if(!error) {
        console.log("写入成功");
    }
})