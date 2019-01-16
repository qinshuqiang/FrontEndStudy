function getDate(dt) {
    // var dt = new Date();//创建日期对象
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth() + 1;
    //判断月份是否小于十，小于十就加个0
    month = month < 10 ? "0" + month : month;
    //获取日
    var day = dt.getDate();
    // 判断日是否小于10，小于十就+0
    day = day < 10 ? "0" + day : day;
    //获取小时
    var hour = dt.getHours();
    // 判断小时是否小于10，小于十就+0
    hour = hour < 10 ? "0" + hour : hour;
    //获取分钟
    var minute = dt.getMinutes();
    // 判断分钟是否小于10，小于十就+0
    minute = minute < 10 ? "0" + minute : minute;
    //获取秒
    var second = dt.getSeconds();
    // 判断秒是否小于10，小于十就+0
    second = second < 10 ? "0" + second : second;
    //返回
    return year + "年" + month + "月" + day + "日  " + hour + ":" + minute + ":" + second;
}