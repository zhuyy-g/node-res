//const 声明的是一个对象时，是可以修改对象内容的(因为此时const的指向是对象的地址，没有发生改变)
const obj = {name:"lisi",age:22};
obj.name = "wangwu";
console.log(obj);