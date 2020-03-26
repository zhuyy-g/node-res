const template = require("art-template");
//以下是将数据绑定到模板的方法
//1.设定默认的寻找模板的根目录
template.defaults.root = "./";
//2.将数据绑定到页面
var str = template("./index.html",{value:"zhuyy-g"});
console.log(str);