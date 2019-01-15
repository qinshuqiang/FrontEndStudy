function isLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}   //判断闰年
function getDays(year, month, day) {
    var days = day;   //存储当月过了几天
    if (month == 1) {  //如果用户输入的是一月，直接返回天数
        return days;
    }
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  //把12个月的天数放进数组（暂时不考虑闰年）
    for (var i = 0; i < month - 1; i++) {  //开始遍历，次数为month-1（当月的已经放进了days），当然，第一个数组下标为0
        days += months[i];  //逐个放进去
    }
    if (isLeapYear(year) && month > 2) {
        days++;  //闰年并且月份大于二月的，days++；
    }
    return days;
}
