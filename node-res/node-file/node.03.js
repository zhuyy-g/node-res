const fs = require("fs");
fs.readFile("./tt.txt",(err,data)=>{
    data += "-------左右铭";
    fs.writeFile("./tt.txt",data,function (err){
        if(!err) {
            console.log("写入成功！");
        }
    })
})