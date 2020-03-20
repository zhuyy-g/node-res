let a = 1;
if(1){
    //由let声明的变量不具有变量提升
    console.log(a);
    let a = 3;
} 
console.log(a);