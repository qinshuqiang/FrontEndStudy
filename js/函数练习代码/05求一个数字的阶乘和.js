function getJieChengSum(n){
    var sum=0;   //定义初始化的和
    for(var i=1;i<=n;i++){  //开始遍历，对象为n，从1开始
        sum+=getJieCheng(i)  //一个数的阶乘积已经有代码了，直接套用。
        //遍历一轮就会加上逐个数的积到sum里
    }
    return sum;
}