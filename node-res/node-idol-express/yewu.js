// const template = require("art-template");
const linkdb = require("./linkdb");
const url = require("url");
const querystring = require("querystring");
const formidable = require("formidable");
// template.defaults.root = "./";

//下面link对应的是linkdb模块导出的link方法，给它传的参数是一个方法function(db_data){....},对应的是下面的call,于是在下面的方法中将结果作为
//call的参数传出，也就对应了这里的db_data
// linkdb.link(function(db_data){
//     module.exports.htmls = template("./index.html",{data:db_data});
// })

// module.exports.getone = function(id,call) {
//     linkdb.query(id,function(data){
//         call(template("./detail.html",{data:data}))
//     })
// }

module.exports = {
    login_get(req,res){
        res.render("./login.html",{});
    },
    login_post: function(req,res){
        var f = new formidable.IncomingForm();
        f.parse(req,(err,fileds)=>{
            if(fileds.username == "admin" && fileds.psd == "123"){
                req.session.se_da = fileds;
                var backstr = "<script>alert('登录成功');window.location.href = '/'</script>";
                res.setHeader("Content-type","text/html;charset=utf-8");
                res.end(backstr);
            }else{
                var backstr = "<script>alert('登录失败');window.location.href = '/login'</script>";
                res.setHeader("Content-type","text/html;charset=utf-8");
                res.end(backstr);
            }
        })
    },
    getAll: function(req,res){
        //在页面一览之前，要判断用户是否登录过（session里面是不是有值）
        if(!req.session.se_da){
            var html = "<script>alert('请登录');window.location.href = '/login'</script>";
            res.setHeader("Content-type","text/html;charset=utf-8");
            res.end(html);
            return;
        }

        linkdb.where().select(function(data){
            // res.end(template("./index.html",{data:data}))
            res.render('./index.html',{data:data})
        })
    },
    getOne: function(req,res){
        var urlObj = url.parse(req.url,true);
        var queryObj = JSON.parse(JSON.stringify(urlObj.query));
        linkdb.where("id = " + queryObj.id).select(function(data){
            // res.end(template("./detail.html",{data:data}))
            res.render('./detail.html',{data:data})
        })
    },
    upuser_get: function(req,res){
        var urlObj = url.parse(req.url,true);
        var queryObj = JSON.parse(JSON.stringify(urlObj.query));
        linkdb.where("id = " + queryObj.id).select(function(data){
            // res.end(template("./edit.html",{data:data}))
            res.render('./edit.html',{data:data})
        })
    },
    upuser_post: function(req,res){
        var qu_data = "";
        req.on("data",function(data){
            qu_data += data
        })
        req.on("end",function(){
            //将post传递过来的这样格式的数据name=%E9%98%B2%E5%BC%B9%E5%B0%91%E5%B9%B4%E5%9B%A2&ability=handsome进行转换{ name: '防弹少年团', ability: 'handsome' }
            var data_obj = JSON.parse(JSON.stringify(querystring.parse(qu_data)));
            var urlObj = url.parse(req.url,true);
            var queryObj = JSON.parse(JSON.stringify(urlObj.query));
            linkdb.where("id = " + queryObj.id).update(data_obj,function(data){
                if(data.toString() >= 1){
                    var html = "<script>alert('修改成功！');window.location.href = './';</script>";
                    res.setHeader("Content-type","text/html;charset=utf-8");
                    res.end(html);
                }
            })
        })
    },
    delete: function(req,res){
        var urlObj = url.parse(req.url,true);
        var queryObj = JSON.parse(JSON.stringify(urlObj.query));
        linkdb.where("id = " + queryObj.id).delete(function(data){
            if(data.toString() >= 1){
                var html = "<script>alert('修改成功！');window.location.href = './';</script>";
                res.setHeader("Content-type","text/html;charset=utf-8");
                res.end(html);
            }
        })
    },
    addOne_post: function(req,res){
        var add_data = "";
        req.on("data",function(data){
            add_data += data;
        })
        req.on("end",function(){
            var data_obj = JSON.parse(JSON.stringify(querystring.parse(add_data)));
            linkdb.add(data_obj,function(data){
                if(data.toString() >= 1){
                    var html = "<script>alert('添加成功');window.location.href='./';</script>";
                    res.setHeader("Content-type","text/html;charset='utf-8'");
                    res.end(html);
                }
            })
        })
    }
}