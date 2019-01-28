/**
 * 根据id属性的值，返回相应的标签元素
 * @param id id属性的值，string类型的
 * @returns {Element} 元素对象
 */
function my$(id) {
    return document.getElementById(id)
}
/**
 * 操作元素中的文本内容
 * 兼容代码
 * 解决元素内设置文本火狐和ie浏览器不兼容的问题
 */
function setInnerText(element, text) {
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * element.firstChild---火狐和谷歌获取的第一个子节点
 * element.firstChild---IE8获取的第一个元素
 * element.firstElementChild---谷歌和火狐的第一个元素，IE8不支持
 * 解决上面兼容性问题还有获取最后一个子节点的问题
 * 
 */
function getFirstElementChild(element) {
    if (element.firstElementChild) {  //浏览器element.firstElementChild的结果是undefined，为true,说明支持
        return element.firstElementChild;
    } else {
        var node = element.firstChild;//第一个节点
        while (node && node.nodeType != 1) {   //当节点类型为1时停止循环
            node = node.nextSibling;   //如果不满足条件，寻找下一个节点
        }
        return node;
    }
}
function getLastElementChild(element) {
    if (element.lastElementChild) {  //浏览器element.firstElementChild的结果是undefined，为true,说明支持
        return element.lastElementChild;
    } else {
        var node = element.lastChild;//第一个节点
        while (node && node.nodeType != 1) {   //当节点类型为1时停止循环
            node = node.previousSibling;   //如果不满足条件，寻找下一个节点
        }
        return node;
    }
}

/**
 * 为元素绑定事件和解绑事件的兼容代码
 * 
 */
// 绑定事件
function addElementListener(element, type, fn) {
    if (element.addElementListener) {
        element.addElementListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent(("on" + type, fn))
    } else {
        element["on" + type] = fn;
    }
}
// 解绑事件
function removeElementListener(element, type, fnName) {
    if (element.removeElementListener) {
        element.removeElementListener(type, fnName, false);
    } else if (element.detachEvent) {
        element.detachEvent(("on" + type, fnName))
    } else {
        element["on" + type] = null;
    }
}
/**
 * 获取元素任意属性的值兼容代码
 * @param {元素} element 
 * @param {属性名称（字符串样式）} attr
 * return 属性值 
 */
function getStyle(element, attr) {
    //判断浏览器是否支持此方法
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}
/**
 * 获取任意一个属性的当前属性值，改变到目标属性
 * @param {元素} element 
 * @param {到达的位置} target 
 *  @param {属性名字} attr 
 */
// 匀速
function animate(element, attr, target) {
    clearInterval(element.timeID);
    element.timeID = setInterval(function () {
        var current = parseInt(getStyle(element, attr))
        var step = 10;
        step = target > current ? step : -step;
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style[attr] = current + "px";
        } else {
            clearInterval(element.timeID);
            element.style[attr] = target + "px";
        }
    }, 20)
}
// 由快到慢
function animate2(element, attr, target) {
    clearInterval(element.timeID);
    element.timeID = setInterval(function () {
        var current = parseInt(getStyle(element, attr))
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        console.log("当前位置:" + current + "目标位置:" + target + "位置移动长度:" + step)
        current += step;
        element.style[attr] = current + "px";
        if (current == target) {
            clearInterval(element.timeID)
        }
    }, 20)
}
/**
 * 获取任意多个属性的当前属性值，改变到目标属性
 * @param {元素} element 
 * @param {到达的位置} target 
 *  @param {属性名字} attr 
 */
function animate3(element, json) {
    clearInterval(element.timeID);
    element.timeID = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            var current = parseInt(getStyle(element, attr))
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            console.log("当前位置:" + current + "目标位置:" + json[attr] + "位置移动长度:" + step)
            current += step;
            element.style[attr] = current + "px";
            if (current != json[attr]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeID)
        }
    }, 20)
}
/**
 * 获取任意多个属性的当前属性值，改变到目标属性,增加回调函数
 * @param {元素} element 
 * @param {到达的位置} target 
 *  @param {属性名字} attr 
 */
function animate4(element, json, fn) {
    clearInterval(element.timeID);
    element.timeID = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            var current = parseInt(getStyle(element, attr))
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            console.log("当前位置:" + current + "目标位置:" + json[attr] + "位置移动长度:" + step)
            current += step;
            element.style[attr] = current + "px";
            if (current != json[attr]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeID);
            if (fn) {
                fn();
            }
        }
    }, 20)
}
/**
 * 获取任意多个属性的当前属性值，改变到目标属性,增加回调函数（增加了透明度）
 * @param {元素} element 
 * @param {到达的位置} target 
 *  @param {属性名字} attr 
 */
function animate4(element, json, fn) {
    //清理定时器
    clearInterval(element.timeID);
    // 定时器
    element.timeID = setInterval(function () {
        // 默认，假设所有属性都到达了目标
        var flag = true;
        // 遍历json对象中的每个属性和属性对应得目标值
        for (var attr in json) {
            // 判断属性是否opacity
            if (attr == "opacity") {
                //把opacity属性放大一百倍，便于取余计算
                var current = getStyle(element, attr) * 100;
                // 设置每次变化的大小
                var step = (json[attr] - current) / 10;
                // 进行取余计算，正数则向上取余，负数则向下取余
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                console.log("当前位置:" + current + "目标位置:" + json[attr] + "位置移动长度:" + step)
                // 开始计算渐变
                current += step;
                // 记得最后的属性要缩小一百倍哈
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {   //判断属性是否z-index
                // 直接赋值，因为他的类型就是数字
                element.style[attr] = current;
            } else {    //如果目标是普通属性
                var current = parseInt(getStyle(element, attr))
                var step = (json[attr] - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                console.log("当前位置:" + current + "目标位置:" + json[attr] + "位置移动长度:" + step)
                current += step;
                element.style[attr] = current + "px";
            }
            // 最后进行判断是否到了目标值
            if (current != json[attr]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeID);
            if (fn) {
                fn();
            }
        }
    }, 20)
}
/**
 * 产生随机数
 * 
 */


// (function (window) {
//     function Random() {

//     }
//     Random.prototype.getRandom = function (min,max) {
//         return Math.floor(Math.random() * (max-min)+min);
//     }
//     window.Random =Random;
// })(window);
// var rd = new Random();
// console.log(rd.getRandom());


/**
 * 随机产生小方块
 */
// 产生随机对象的
(function (window) {
    function Random() {

    }
    Random.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    // 把局部对象的返回值暴露给window顶级对象
    window.Random = new Random();
})(window);
(function (window) {
    var map = document.querySelector(".map");
    //食物的构造函数
    function Food(width, height, color) {
        this.width = width || 20;
        this.height = height || 20;
        //横纵坐标
        this.x = 0;
        this.y = 0;
        //颜色
        this.color = color;
        this.element = document.createElement("div");
    }
    //初始化小方块显示的效果及其位置
    Food.prototype.init = function (map) {
        //设置小方块的样式
        var div = this.element;
        div.style.position = "absolute";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        // 将小方块加入地图
        map.appendChild(div);
        this.render(map);
    }
    Food.prototype.render = function (map) {
        // 产生随机横纵坐标
        var x = Random.getRandom(0, map.offsetWidth / this.width) * this.width;
        var y = Random.getRandom(0, map.offsetHeight / this.height) * this.height;
        this.x = x;
        this.y = y;
        var div = this.element;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
    }
    var fd = new Food(20, 20, "green");
    fd.init(map);
})(window);