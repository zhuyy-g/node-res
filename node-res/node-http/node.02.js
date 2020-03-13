const http = require("http");
const fs = require("fs");

var server = http.createServer()

server.listen(8080,function (){
    console.log("现在可以请求本地的8080端口了")
})

server.on("request",function (req,res){
    var url = req.url;
    //会出现以下现象的原因是：node中的http 模块默认的请求路径是'./',于是在这个路径当中调用fs模块当中的文件读取模块，读取到的内容返回（照请求来源返回）
    if(url == "/"){
        fs.readFile("./index.html",function (err,data){
            res.end(data)
        })
    }
    else if (url == "/list-file"){
        //这一段代码出现的原因：在读取到index.html模块前台解析的过程中，前台会发送一次ajax请求给服务端
        fs.readdir("./",function (err,data){
            //这里的data会返回一个字符串数组（数组元素是该文件的所有同级目录）
            var arr_data = [];
            //在这个下面不能直接循环，由于stat的方法是异步的，会出现i丢失的问题，解决方法：闭包
            for (var i in data) {
                //在这个循环当中，要根据文件名，调用fs的方法，读取对应文件名称下面的文件信息（对象形式存储）
                (function(i){
                    //这一句话不可以丢掉,数组里的对象如不初始化，那么直接使用对象属性会报错
                    arr_data[i]={};
                    fs.stat(data[i],function (err,file){
                        //得到当前文件的类型
                        if(file.isFile()){
                            arr_data[i].type = 'f';
                        }else {
                            arr_data[i].type = 'nof';
                        }
                        arr_data[i].name = data[i];
                        arr_data[i].size = file.size;
                        arr_data[i].mtime = file.mtime;
                        if(i == data.length - 1){
                            res.end(JSON.stringify(arr_data));
                        }
                    })
                })(i)
            }
            //不可以在这个下面返回arr_data,因为异步的原因for循环会在瞬间完成，返回的操作必须在回调函数里面做
        })
    }
})