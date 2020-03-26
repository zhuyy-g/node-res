const fs = require("fs");
const http = require("http");
const template = require("art-template");
template.defaults.root = "./";

var server = http.createServer();

server.listen(8080,function (){
    console.log("现在可以访问8080端口了")
})
//以下操作的结果是：遍历该文件的同级目录，并且得到各个文件的详细信息，拼装为对象数组，渲染出响应的页面
server.on("request",function (req,res){
    var url = req.url;
    if(url == "/") {
        //用fs核心模块遍历文件夹的方法，得到的返回结果为data(文件名组成的数组)
        fs.readdir("./","utf8",function (err,data){
            var arr_data = [];
            for(var i in data) {
                //对数组里的对象可以用这个方法进行初始化
                arr_data[i] = {};
                //用这个自执行函数的原因:fs的stat方法是异步函数会导致i丢失的问题，这样做可以保存i
                (function (i){
                    //fs的stat方法可以用来解析文件
                    fs.stat(data[i],function (err,file){
                        //可以用这种方法给对象里的属性赋值
                        arr_data[i].name = data[i];
                        arr_data[i].size = file.size;
                        arr_data[i].mtime = file.mtime;
                        //此时文件内部的内容已经被读取到了，这里有一个异步函数的常见错误点（代码要在回调函数里面处理，不然可能会有时间差的问题）
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