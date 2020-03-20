const fs = require("fs");
const http = require("http");
const template = require("art-template");
template.defaults.root = "./";

var server = http.createServer();

server.listen(8080,function (){
    console.log("现在可以访问8080端口了")
})

server.on("request",function (req,res){
    var url = req.url;
    if(url == "/") {
        fs.readdir("./","utf8",function (err,data){
            var arr_data = [];
            for(var i in data) {
                arr_data[i] = {};
                (function (i){
                    fs.stat(data[i],function (err,file){
                        arr_data[i].name = data[i];
                        arr_data[i].size = file.size;
                        arr_data[i].mtime = file.mtime;
                        //此时文件内部的内容已经被读取到了
                        if (i == data.length - 1) {
                            console.log(arr_data);
                            var str = template("./index.html",{data:arr_data});
                            res.end(str);
                        }
                    })
                })(i)
            }
        })
    }
})