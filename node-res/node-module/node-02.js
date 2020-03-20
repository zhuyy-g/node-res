const yewu = require("./node-03");

function server(server) {
    server.on('request',function(req,res){
        var url = req.url;
        if(url == "/"){
            console.log(yewu.data);
            res.end(yewu.data);
        }
    })
}

module.exports.server = server;