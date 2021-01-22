function getFib(n) {
    var arr = new Array;
    if (n == 1) { //判断n的值是否为1
        return 1; //返回数列
    } else if (n == 2) { //判断n的值是否为2
        arr=[1,1];
        return arr; //返回数列
    } else if (n > 2) {  //判断n是否大于2
        var num1 = 1;  //设置第一个数的值
        var num2 = 1;  //设置第二个数的值
        var sum = 0;   //设置一个初识值（作用于第三个数）
        arr=[1,1];    //把第一，第二个数写出来（他们不参与循环，先加进来便于后面输出）
        for (var i = 3; i <= n; i++) {   //从第三个数开始循环，i不大于n
            sum = num1 + num2;     //  初始值=第一个数+第二个数，定义第三个数
            num1 = num2;    //第一个数向前推移，值为第二个数
            num2 = sum;     //第二个数向前推移，值为第三个数
            arr[i-1]=sum;      //把每次循环推算出的第三个数放进数组，用于输出
        }
        return arr //返回数列
    }

}