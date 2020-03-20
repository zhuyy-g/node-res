var fun = function(){
    console.log(this.a + this.b)
}

var obj = {
    a:1,
    b:2,
    fun
}

obj.fun();