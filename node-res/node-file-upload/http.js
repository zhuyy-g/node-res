const express = require("express");
//在node中，引入这个模块来处理文件上传的问题
const formidable = require("formidable");
const fs = require("fs");

var app = express();

app.post("/",(req,res) => {
    var form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files) => {
        // console.log(err);
        // console.log("===============================");
        // console.log(fields);
        // console.log("===============================");
        // console.log(files);
        // console.log("===============================");
        //fs的这一个方法可以用来修改上传后文件的地址
        fs.rename(files.imgs.path,"./" + files.imgs.name,(err)=>{
            console.log(err);
        })
    }) 
})

app.listen(666,function(){
    console.log("现在可以访问666端口了");
})