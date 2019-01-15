function f1(){
    console.log("f1被调用了")
    return function(){     //函数可以作为返回值使用
        console.log("哈哈，我被调用了");
    }
}
var f2=f1();//此时，f2是一个函数了
f2();