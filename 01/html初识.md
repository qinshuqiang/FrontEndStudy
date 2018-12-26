HTML指的是超文本标记语言，首字母简写为HTML
HTML不是编程语言，而是一种标记语言
标记语言是一套标记标签
HTML不变的样式规范：

        <!DOCTYPE html>   告诉浏览器代码的语言为html5
        <html lang="en"> 
        <head>
        <meta charset="UTF-8">   目前最常用的字符集编码方式，常用的还有gbk和gb2312   gb2312：简单中文，包含6763个汉字，BLG5：繁体中文，港澳台等使用，UTF-8包含全世界所有要用到的语言  UTF-8相对会大一点
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    </head>
    <body>
    </body>
    </html>

`

### HTML标签分类

一、**双标签**：成对出现，结尾以/结尾，如undefinedundefinedundefinedundefined<head></head>   /表示关闭符

二、**单标签**：一个出现，如<br />

##### HTML标签关系

如上：
1、html上head标签的爸爸，title上head的儿子，title上html的孙子，body是html的儿子，他们这样的关系的

##### html标签的语义化

含义：在合适的地方使用有意义的标签

### html常用标签：

**标题标签**：只有6级 用h1到h6表示
**段落标签**：用p表示
**水平线标签：**<hr /> 是一个单标签
**换行标签：**<br/>**是一个单标签**
**div  span标签：**是没有语义的，用来布局
**文本格式化标签：**加粗<strong>  <b> b是加粗，strong加粗兼加强语义，一般使用strong；倾斜<em>，<i>,同样道理em要比i强调多一些，用得比较少；删除线<s><del>；del比s强调多一些；下划线<u><ins>，使用ins多一些。
**图像标签：**<img src="路径"/>  是一个单标签，属性：alt（文本）图片不显示时的替换文本，title（文本）鼠标悬停时显示的文本，width（像素，XHTML不支持页面百分比），height（像素，XHTML不支持页面百分比），border（像素）图片的边框
**链接标签**：a是anchor单词缩写  属性：href="跳转目标"  target="打开方式"   图片、文本都可以使用链接标**签**
**锚点定位**：快速的跳页面定位的位置，<a href="#suibian">    的a标签回调到id为suibian的标签

**base便签：** 设置在新的页面打开

**特殊字符：**空格标签    &nbsp 等等。。。

**注释标签：**    <!-- 注释语句  -->在文档中作注释

**列表标签：**列表的最大特点上整齐整列整排，

1、无序列表：ul，里面包含的上li标签，只能放li标签，不提倡放其他标签，li标签里面可以发给其他标签，相当于一个容器div

2、有序列表：ol，里面包含的上li标签，只能放li标签，不提倡放其他标签，li标签里面可以发给其他标签，相当于一个容器div

3、自定义列表：dl，里面包含dt（名词，比如北京），dd（描述，主要对dt进行描述，一个dt包含多个dd），一般做底部导航

### 路径

**相对路径：**

1、**同一级路径，**图像和html文件在同一级文件，只需输入图像文件名即可，如src="文件名.jpg"

2、**下一级路径，**图像在下一级文件夹，输入文件夹名加文件名，中间用/隔开，如src="文件夹名/文件名"

3、**上一级路径，**图像位于上一级文件及中，输入../加文件名，上多少级就是加多少个../，如src="../../img/wo.jpg"

**绝对路径：**  

1、如src="F:\study\第一天\wo.jpg"

2、如src="网络路径"

#### 表格

表格不是用来做布局的，bug会非常多，用来展示数据用，做表格时，三参为0，即border、cellspacing、cellpadding为0。

**标签：**table

**内标签：**

行  tr    

 单元格  td  

表头单元格  th   表头标签会自动给文本加粗及居中  thead

表格标题：caption  只存在表格里面；

**表格属性：**

width宽  

height高  

 align  设置在网页中的水平对齐方式，单位为left，center，right；

  border  边框，默认为0；  

  cellspacing   设置单元格与单元格之间的空白间距；

  cellpadding设置单元格内容距离单元格边框之间的间距

#### label标签

?    <label for="id">  点击这个标签的界面，键盘输入会跳转到for=的这个id位置，方便用户输入体验

**textarea控件（文本域）**：双标签，用于多行文本输入，如留言板等

### input控件

**标签：**input  单标签，

| 属性      | 属性值                                                       | 描述                                                         |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| type      | text<br>password<br/>radio<br/>checkbox<br/>button<br/>submit<br/>reset<br/>image<br/>file | 单行文本输入框<br/>密码输入框<br/>单选按钮<br/>复选框<br/>普通按钮<br/>提交按钮<br/>重置按钮<br/>图像形式的提交按钮<br/>文件域 |
| name      | 由用户自定义                                                 | 控件的名称                                                   |
| value     | 由用户自定义                                                 | input控件中的默认文本值                                      |
| size      | 正整数                                                       | input控件在页面中的显示宽度                                  |
| checked   | checked                                                      | 定义选择控件默认被选中的项                                   |
| mexlength | 正整数                                                       | 控件允许输入的最多字符数                                     |

**如果是一组，我们必须给他命名相同的name，实现多个选其中的一个**

image 属性值的type：  要加src=路径

文件域是用来上传文件的

#### 下拉菜单

标签：select  双标签

内标签：option  选项

属性：

