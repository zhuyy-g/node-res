var arr = ["4","5","6"];
//使用for...of...遍历数组，相应的i对应的是数组的元素
for(let i of arr){
    console.log(i);
}
//使用 let声明的变量具有块级作用域
console.log(i)