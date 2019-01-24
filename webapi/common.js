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
        var flag=true;
        for (var attr in json) {
            var current = parseInt(getStyle(element, attr))
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            console.log("当前位置:" + current + "目标位置:" + json[attr] + "位置移动长度:" + step)
            current += step;
            element.style[attr] = current + "px"; 
            if(current!=json[attr]){
                flag=false;
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
function animate4(element, json,fn) {
    clearInterval(element.timeID);
    element.timeID = setInterval(function () {
        var flag=true;
        for (var attr in json) {
            var current = parseInt(getStyle(element, attr))
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            console.log("当前位置:" + current + "目标位置:" + json[attr] + "位置移动长度:" + step)
            current += step;
            element.style[attr] = current + "px"; 
            if(current!=json[attr]){
                flag=false;
            }  
        }
        if (flag) {
            clearInterval(element.timeID);
            if(fn){
                fn();
            }
        }
    }, 20)
}