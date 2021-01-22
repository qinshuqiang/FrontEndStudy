function getSumN() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {  //arguments 可以获取传入每个参数的值
        //arguments  是一个伪数组，把传入的值（无论多少个）一个个的放进去
        sum += arguments[i]
    }
    return sum;
}