var obj = {
    ks:{}
}

// obj.ks.name = "abc";
// obj.ks.age = 11;

//obj.ks = {name:"abc",age:11}
//注意：这样是无法给obj.ks赋值的（第一次ls指向的是一个地址，第二次直接给它赋值了，那么obj.ks依旧还是空的）
var ls = obj.ks;
//ls = 1;
ls.name = "abc";
ls.age = 11;

console.log(obj);