var a = require('./node.02.js');
var d = 3;
var e = a + d;
console.log(e);
//直接用exports进行导出的时候，必须要加上.xxx 
//module.exports 不一定要这样
exports.data = e;