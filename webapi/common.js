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
