//用${}实现字符串的拼接
var zyy = "朱颖颖";
var str = `这是${zyy}用es6模板字符串写出来的字符串`;
console.log(str);
//${}括号里面可以写表达式
var a = 1;
var str2 = `这是${a + 1}用es6模板字符串写出来的字符串`;
console.log(str2);
//${}可以写对象.属性的方式
var idol = {name:"BTS",age:24};
var str3 = `我的哥哥们${idol.name}好好看啊`;
console.log(str3);