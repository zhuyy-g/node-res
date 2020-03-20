const template = require("art-template");
template.defaults.root = "./";
var str = template("./index.html",{value:"zhuyy-g"});
console.log(str);