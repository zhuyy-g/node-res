var fun = function(){
    console.log(this.a + this.b)
}

var obj = {
    a:1,
    b:2,
    //当属性名与方法名相同时，可以使用这样的简写方法
    fun
}

obj.fun();