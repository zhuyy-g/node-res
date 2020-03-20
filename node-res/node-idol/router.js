const yewu = require('./yewu');
const fs = require("fs");
const url = require("url");

module.exports.bind = function (server) {
    server.on("request",function (request,response){
        var urlObj = url.parse(request.url,true);
        var method = request.method;
        if(method == "GET") {
            if(request.url == "/") {
                // response.end(yewu.htmls);
                yewu.getAll(request,response);
            }else if(urlObj.pathname == "/getone"){
                //注意：下面的用法可能会出现url核心模块的一个bug [Object: null prototype] { name: 'aaa', id: '1' }
                //需要对urlObj.query进行像下面这样的封装
                // var queryObj = JSON.parse(JSON.stringify(urlObj.query));
                // yewu.getone(queryObj.id,function(data){
                //     response.end(data)
                // })
                yewu.getOne(request,response);
            }else if(urlObj.pathname == "/updateone"){
                yewu.upuser_get(request,response);
            }else if(urlObj.pathname == "/deleteone"){
                yewu.delete(request,response);
            }else {
                fs.readFile ("."+request.url,function (err,data){
                    response.end(data)
                })
            }
        }else if(method == "POST") {
            var urlObj = url.parse(request.url,true);
            if(urlObj.pathname == "/updateone") {
                yewu.upuser_post(request,response);
            }
        }else {

        }
        
    })
}