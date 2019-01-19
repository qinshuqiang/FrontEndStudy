/**
 * 根据id属性的值，返回相应的标签元素
 * @param id id属性的值，string类型的
 * @returns {Element} 元素对象
 */
function my$(id) {
    return document.getElementById(id)
}
/**
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