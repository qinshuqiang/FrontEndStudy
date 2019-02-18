## jQuery操作样式

### 操作样式

### 1、css操作

$(选择器).css("属性","属性值");

一次改多个：

$(选择器).css({

​    "属性","属性值",

​    "属性","属性值",

​     ....

});

### 2、class操作

#### 添加class

$(选择器).addClass（"类名");

只会添加类，之前的类是不会删除的

#### 移除class

$(选择器).removeClass（"类名");

#### 判断是否有某个class

$(选择器).hasClass（"类名");

判断是否有这个类，返回Boolean

#### 切换class（有删无增）

$(选择器).toggleClass（"类名");

判断是否有这个类，有则删除，无则增加

### 获取样式

$(选择器).css("属性");

**注意：隐式迭代获取操作的时候只会返回第一个元素对应的值，设置的时候会把所有选中的对象设置相同的值**





## jQuery操作属性

### 修改属性

#### attr方法

$(选择器).attr（"属性","值");

设置多个属性即传入对象{}

### 获取属性

$(选择器).attr（"属性");

**注意对于布尔类型的属性，不要用attr方法，用prop方法，使用方式跟attr一样**



## 三组基本动画

#### show()方法

不传参数，没有动画，显示效果

参数为动画持续时间（速度），还可以是固定字符串（“fast”）或slow，normal

后面还可以在后面加一个回调函数：即动画执行完了就执行这个函数

#### hide()方法

跟show参数一样

#### slideDown()滑入

如果不传参数，有一个默认值：normal，也可以加参数：速度,回调函数

#### slideUp()滑出

参考slideDown

#### slideToggle()滑入滑出切换

滑入+滑出结合切换

#### fadeIn()淡入

#### fadeOut()淡出

#### fadeToggle()淡入淡出切换

fade跟slide可以传入的参数一样

### 自定义动画

#### animate({属性:属性值},参数值,"参数值");

第一个参数为对象：传入需要动画的属性值---必须的

第二个参数为时间：动画的执行时间

第三个参数：动画执行的效果（匀速、缓速等等）,默认是swing

### 停止动画stop()

停止正在执行的动画

参数：

clearQueue：是否清除动画队列---true或false    默认为false

jumpToEnd：是跳转到当前动画的最终效果---true或false    默认为false







## jQuery操作节点

### 动态创建节点

### append()或appendTo()

$(选择器).append('需要创建的节点');

也可以：

var $jq=$('节点内容');

$(选择器).append($jq);

两个方法一样的

### prepend()或prependTo()

在元素开始添加一个子元素，方法和append()类似

### after()

在后方添加一个兄弟元素

### before()

在后方添加一个兄弟元素

### 清空和删除节点

#### 清空节点

##### html("")或者empty()

清空选择到元素内部的内容，html()会造成内存泄漏（即清空后该元素所注册的事件无法清除）

一般用empty()，该方法jQuery会进行清空内存数据的方法，阻止内存泄漏

#### 删除节点

##### remove()

删除选择到的节点

#### 克隆节点

##### clone();

克隆选择到的元素，默认参数为false：深度复制，不支持浅复制，不会复制事件，参数为true：事件也会复制



## jQuery特殊属性操作

#### val()

用来操作value属性的 

#### html()和text()

html操作标签和内容，text操作内容

#### width()和height()

操作width和height，返回的是number

只获取width和height的值，不包括内边距

#### innerWidth()和innerHeight()

操作宽高+padding的值

#### outerWidth()和outerHeight()

参数默认为false：获取宽高+padding+border

参数为true：获取宽高+padding+border+margin

#### scrollTop()和scrollLeft()

被卷去的高度和宽度

#### offset()和position()

offset获取元素相对于document的位置

position获取元素相对于有定位父元素的位置

## delegate()委托事件

$(选择器).delegate(先择器,所需要注册的事件,事件函数)

第一个参数：selector事件最终由谁执行，就选择谁

第二个参数：事件类型

第三个参数：函数（要做什么）

好处：动态创建的元素也能有事件

原理：利用事件冒泡，点击元素，元素会冒泡到他的祖先元素，祖先元素响应够给予该元素注册并响应事件

## on注册事件

$(选择器).on(事件,selector--如果不是委托事件，那就不写,函数)；

如果selector不输入，那么事件触发为简单事件

如果输入，那么就是委托事件，该委托事件跟delegate一样的原理

## 解除事件绑定和事件触发

$(选择器).off(需要移除的事件)

不传参数，会把所有的事件解除

$(选择器).trigger(需要触发的事件)

## 方法

#### mouseover()和mouseenter()

鼠标移入事件,一般使用mouseenter，效率比较高

#### mouseout()和mouseleave()

鼠标移除事件，和上面的配对使用

#### index()

返回当前元素所有**兄弟元素**的索引

#### end();

会返回更改jQuery对象前的jQuery对象

#### each();

用于遍历jQuery对象

### 阻止浏览器默认行为：

preventDefault();

### 阻止事件冒泡：

stopPropagation();

##### return false;

既能阻止事件冒泡，也能阻止浏览器默认行为

## jQuery解决冲突

$.noConflict($);

返回$，可以用变量接收













