var fun = function(){
    return "这是一个塞在模板字符串里面的方法";
}
var str = `啦啦啦，测试${fun()}`;
console.log(str);
//在${}里面加上方法时，要写一个自执行的函数(格式:(function(){xxx})())
var str2 = `啦啦啦
${(function(){
    return "这是一个塞在模板字符串里面的方法";
})()}`;
console.log(str2);