var obj1 = {
    name:"lisi",
    fun: function(){
        console.log(this.name);
    }
}
//在箭头函数中不要使用this关键字
// var obj1 = {
//     name:"lisi",
//     fun: () => {
//         console.log(this.name);
//     }
// }
obj1.fun();

var obj2 = {
    name:"刘能",
    fun: obj1.fun
}

obj2.fun();