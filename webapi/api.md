# DOM

Document Object Model  ----  文档对象模型

##### 文档（document）

把一个html文件，看成一个文档，由于万物皆对象，所以把这个文档看成一个对象，文档中所有表情都可以看成一个对象。一个页面就是一个文档

##### 元素（element）

页面中的每个表情，都是一个元素(element)，每个元素都可以看成一个对象

标签可以嵌套，标签中有标签，元素中有元素

html页面中有一个根标签---html---也叫根元素，它里面有很多的元素（有很多的标签、对象）

##### 节点（node）

页面中所有的内容都是节点：标签，元素，文本

##### 根（root）

#### DOM树

由文档及文档中所有元素组成的树形结构图，叫树状图（DOM树）

##### 阻止超链接的默认的跳转

return false；

## 节点Node

页面所有的页面中所有的内容（标签、属性、文本（文字，换行，空格，回车））

## 节点相关属性

##### 节点的属性：

可以使用标签--元素.出来

可以使用属性节点.出来

可以使用文本节点.出来

| 属性      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| nodeType  | 节点的类型<br/>1---标签<br/>2---属性<br/>3---文本            |
| nodeName  | 节点的名字<br/>标签节点---大写的标签名字<br/>属性节点---小写的属性名字<br/>文本节点---#text |
| nodeValue | 节点的值：<br/>标签节点---null<br/>属性节点---属性值<br/>文本节点---文本内容 |





##### 节点 的十二行代码

| 属性值                  | 描述                                        |
| ----------------------- | ------------------------------------------- |
| .parentNode             | 获取父节点                                  |
| .parentElement          | 获取父元素                                  |
| .parentNode.nodeType    | 标签的类型                                  |
| .parentNode.nodeName    | 标签的名字                                  |
| .parentNode.nodeValue   | 标签的值                                    |
| .childNodes             | 获取子节点                                  |
| .children               | 获取子元素                                  |
| .firstChild             | 第一个子节点--IE8中是第一个元素             |
| .firstElementChild      | 第一个子元素---IE8不支持                    |
| .lastChild              | 最后一个子节点--IE8中是第一个元素           |
| .lastElementChild       | 最后一个子元素---IE8不支持                  |
| .previousSibling        | 某个元素的前一个兄弟节点--IE8中是第一个元素 |
| .previousElementSibling | 某个元素的前一个兄弟元素---IE8不支持        |
| .nextSibling            | 某个元素的后一个兄弟节点--IE8中是第一个元素 |
| .nextElementSibling     | 某个元素的后一个兄弟元素---IE8不支持        |

### 总结

凡是获取节点的代码，在谷歌和火狐得到的都是相关的节点

凡是获取元素的代码在谷歌和火狐得到的都是相关的元素

从子节点和兄弟节点开始，凡是获取节点的代码在IE8中的到的是元素，获取元素相关的代码，得到的是undefined----元素的代码在IE8中不支持。



 

## 元素创建的三种方式

#### 为什么要有元素的创建

为了提高用户的体验

#### 添加元素

1、document.write("标签的代码及内容")   

缺陷：如果页面加载完毕后，此时通过这种方式创建元素，那么页面上存在所有的内容都会被干掉

2、对象.innerHTML="标签及代码"

3、document.createElement("标签的名字");

#### 移除元素



## 自定义属性



| 属性                                                  | 描述                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| .innerText                                            | 凡是成对的标签，中间的文本内容，设置的时候，都使用innerText整个属性方式，火狐版本低是不支持的，获取的时候会获取到标签里面所有文本内容，不包括标签 |
| .textContent                                          | ie8不支持，设置标签中的文本内容                              |
| .innerHTML                                            | 主要的作用是在标签中设置标签，是有标签效果的，获取时，会把元素内所有内容（包括标签名）都获取到 |
| .onmouseover                                          | 当鼠标移到元素的时候的事件                                   |
| .onmouseout                                           | 当鼠标移走的事件                                             |
| .onfocus                                              | 获取焦点事件                                                 |
| .onblur                                               | 失去焦点事件                                                 |
| .getAttribute("自定义属性")                           | 专门获取HTML标签中添加的自定义属性的值                       |
| .setAttribute("自定义属性"，值)                       | 专门用来设置自定义属性和值                                   |
| .removeAttribute                                      | 专门用来移除自定义属性的，也可以移除元素自带属性             |
| .appendChild(新元素)                                  | 在元素后面追加子元素                                         |
| .insertBefore(新元素，参照元素)                       | 参照参照元素，在他前面增加新元素                             |
| .replaceChild(新元素，参照元素)                       | 新元素替换参照元素                                           |
| .removeChild(元素值)                                  | 删除该元素                                                   |
| .addEventListener("事件类型"，事件处理函数，false)    | IE8不支持，为元素绑定多个事件                                |
| .removeEventListener("事件类型"，事件处理函数，false) | 解绑事件，事件处理函数要用命名函数，IE8不支持                |
| .attachEvent(参数1，参数2)                            | 为元素绑定多个事件，参数1是事件名字--有on，事件2是事件处理函数（命名或者匿名），只有IE8支持 |
| .detachElement("onclick",命名函数)                    | IE8的解绑事件，其他浏览器不支持                              |
| document.write                                        | 全局创建，创建元素                                           |
| 对象.innerHTML                                        | 修改元素内容，创建元素                                       |
| document.createElement("标签的名字");                 | 创建空标签                                                   |
|                                                       |                                                              |

### 解绑事件：

1、解铃还须系铃人，用什么方法绑定，就用什么方法解除

对象.on事件名字=事件处理函数

对象.on事件名字=null

2、.addEventListener("没有on的事件类型"，事件处理函数，控制事件阶段的false或者true)

事件阶段：事件捕获阶段（从里到外），事件目标阶段（最开始选择的那个），事件冒泡阶段（从里到外）

.removeEventListener("事件类型"，事件处理函数，false)

这种方式解除

3、.attachEvent(参数1，参数2)

.detachElement("onclick",命名函数)

### 事件冒泡

多个元素嵌套，有层次关系，这些元素都注册了相同的事件，如果里面的元素事件触发了，外面的元素事件自动触发了，这叫事件冒泡

#### 阻止事件冒泡

1、window.event.cancelBubble=true  

火狐不支持，window.event是一个对象，ie支持的

2、 e.stopPropagation();

IE不支持，谷歌、火狐支持

window.event和e都是事件参数对象，一个是IE标准，一个是火狐的标准

事件参数e在IE8浏览器中是不存在的，在此时用window.event来代替。

事件冒泡是从里向外的，事件的阶段有三个：

通过e,eventPhase这个属性就可以知道当前的事件是什么阶段，如果这个属性是：

1------捕获阶段----捕获阶段

2------目标阶段---最开始选择那个

3------冒泡阶段---从里向外

一般默认都是冒泡阶段，很少用捕获阶段

# BOM

| 属性                           | 值                                          |
| ------------------------------ | ------------------------------------------- |
| alert                          | 弹出消息，只有一个按钮                      |
| prompt                         | 弹出一个可以输入的框                        |
| confirm                        | 弹出消息，有两个按钮                        |
| window.onload=function         | 当页面加载完毕，才会运行函数                |
| window.onunload=function       | 只支持IE8，页面关闭前运行函数               |
| window.onbeforeunload=function | 只支持IE8，页面关闭后运行函数               |
| window.location                | 可以获取设置地址栏的URL                     |
| location.href="url地址"        | 设置跳转的页面地址                          |
| location.assign("url地址")     | 设置跳转页面地址                            |
| location.reload()              | 重新加载页面                                |
| location.replace("URL地址")    | 设置跳转的页面地址，没有历史记录            |
| window.history.back()          | 后退到浏览器历史记录的上一页                |
| window.history.forward()       | 前进到浏览器历史记录的前一个                |
| window.history.go(number)      | 正数为前进到浏览器历史记录的前X个，反之后退 |
| window.navigator.platform      | 可以判断浏览器所在的系统平台类型            |
| window.navigator.userAgent     | 可以判断用户浏览器的类型                    |

# 计时器

bom中有两个计时器

参数1：函数

参数2：时间--- 毫秒---1000毫秒---1秒

执行过程，页面加载完毕后，过了x秒，执行了一次代码，又过了x秒，再次执行

setInterval(函数,number);

清除定时器

window.clearInterval(要清理的定时器的ID的值);

