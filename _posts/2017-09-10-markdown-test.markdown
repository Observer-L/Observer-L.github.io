---
layout: post
title: "Markdown语法测试"
date: 2017-09-10
categories:
  - Test
description: "Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。本博客使用kramdown解析器，本文是其语法在网页上的实现效果的测试。"
img_words: Mark!down↓
image: /assets/images/other/choose-markdown.jpg
image-sm: /assets/images/other/choose-markdown.jpg
comments: true
---  
<a href="http://foo.com/bar.html#disqus_thread">Link</a>

# 标题
****

# This is an H1

## This is an H2

### This is an H3

#### This is an H4

##### This is an H5

###### This is an H6

<br/>

	# This is an H1
	## This is an H2
	### This is an H3
	#### This is an H4
	##### This is an H5
	###### This is an H6

<br/>

# 换行
****
不隔一个空行的换行行为，在一些编辑器中被解释为换行，即插入一个`<br/>`标签。对与另外一些编辑器，会被解释为插入一个空格。对于后者，若要插入换行标签，请在当前一行的结尾打两个空格。  
**karmadown**属于后者  
或者就是在两行文本直接加一个空行。

也能实现换行效果，不过这个行间距有点大。

# 分隔线
****
`***` `---` `___`
可以显示横线效果。当前后都有段落时，请空出一行：  
前面的段落

***
后面的段落  

# 文本块

****

### 语法1
在连续几行的文本开头加入1个Tab或者4个空格。

    欢迎到访
    很高兴见到您
    祝您，早上好，中午好，下午好，晚安

### 语法2
使用一对各三个的反引号：  
```
欢迎到访特效观测站
我是观测者
你可以在B站、youtube上搜索【特效观测站】找到我
```
该语法也可以实现代码高亮，详见下文

### 文字高亮
文字高亮功能能使行内部分文字高亮，使用一对反引号。  
语法：

```
`github-pages` `jekyll` `markdown` `特效观测站` 
```  
效果：`github-pages` `jekyll` `markdown` `特效观测站`
也适合做一篇文章的tag  

# 转义
****
markdown支持在以下字符前面插入反斜杠 \ 。

	\   反斜线
	`   反引号
	*   星号
	_   底线
	{}  花括号
	[]  方括号
	()  括弧
	#   井字号
	+   加号
	-   减号
	.   英文句点
	!   惊叹号

插入之后，将不再解析这些字符，而是原样输出。如：

\\ 
\` 
\* 
\_ 
\{} 
\[] 
\() 
\# 
\+ 
\- 
\. 
\! 
\# 

# 列表
****

### 普通无序列表
	- 列表文本前使用 [减号+空格]
	+ 列表文本前使用 [加号+空格]
	* 列表文本前使用 [星号+空格]

- 列表文本前使用 [减号+空格]
+ 列表文本前使用 [加号+空格]
* 列表文本前使用 [星号+空格]

### 普通有序列表
	1. 列表前使用 [数字+空格]
	2. 我们会自动帮你添加数字
	7. 不用担心数字不对，显示的时候我们会自动把这行的 7 纠正为 3

1. 列表前使用 [数字+空格]
2. 我们会自动帮你添加数字
7. 不用担心数字不对，显示的时候我们会自动把这行的 7 纠正为 3

# 斜体、粗体、删除线
****

<!-- 关于删除线，切换到 kramdown 后这种写法失效了，浏览了一下文档之后并没有找到 kramdown 对应的语法，这个用得也少，遂直接用 HTML 元素解决问题。update 2016/03/02:kramdown 主分支已经解决了这个问题，见 gettalong/kramdown#304 ，坐等 Release 后 GitHub Pages 更新就能用了。
update 2016/03/29: pages-gem 当前使用的 1.10.0 版本的 kramdown 已经包含了主分支对此的修复，已经可以愉快地使用 ~~hello world~~ 来表示
https://www.tuicool.com/articles/67Vjm2N -->

|语法|效果|
|----|-----|
|`*斜体1*`|*斜体1*|
|`_斜体2_`| _斜体2_|
|`**粗体1**`|**粗体1**|
|`__粗体2__`|__粗体2__|
|`这是一个 ~~删除线~~`|这是一个 <del>删除线</del>|
|`***斜粗体1***`|***斜粗体1***|
|`___斜粗体2___`|___斜粗体2___|
|`***~~斜粗体删除线1~~***`|***<del>斜粗体删除线1</del>***|
|`~~***斜粗体删除线2***~~`|<del>***斜粗体删除线2***</del>|

斜体、粗体、删除线可混合使用

# 表格
--------
	表头1  | 表头2|
	--------- | --------|
	表格单元  | 表格单元 |
	表格单元  | 表格单元 |

	| 表头1  | 表头2|
	| ---------- | -----------|
	| 表格单元   | 表格单元   |
	| 表格单元   | 表格单元   |


表头1  | 表头2|
--------- | --------|
表格单元  | 表格单元 |
表格单元  | 表格单元 |
  
| 表头1  | 表头2|
| ---------- | -----------|
| 表格单元   | 表格单元   |
| 表格单元   | 表格单元   |

### 对齐
表格可以指定对齐方式

	| 左对齐 | 居中  | 右对齐 |
	| :------------ |:---------------:| -----:|
	| col 3 is      | some wordy text | $1600 |
	| col 2 is      | centered        |   $12 |
	| zebra stripes | are neat        |    $1 |

| 左对齐 | 居中  | 右对齐 |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

<br/>

# 链接
****
```markdown
[我的博客](https://www.elpsycongroo.cc "特效观测站")
[我的博客][https://www.elpsycongroo.cc]
```
[我的博客](https://www.elpsycongroo.cc "特效观测站")  
特效观测站 <https://www.elpsycongroo.cc>

||语法|效果|
|---|----|-----|
|1|`[我的博客](http://www.elpsycongroo.cc "特效观测站")`|[我的博客](http://www.elpsycongroo.cc "特效观测站")|
|2|`[我在B站][[[bilibili_zone]]] `|[我在B站][bilibili_zone] |
  
### 图片链接

给图片加链接的本质是混合图片显示语法和普通的链接语法。  
普通的链接中[ ]内部是链接要显示的文本，而图片链接[ ]里面则是要显示的图片。  

直接混合两种语法当然可以，但是十分啰嗦，为此我们可以使用URL标识符的形式。

||语法|效果|
|---|----|:---:|
|1|`[![bilibili_logo][https://space.bilibili.com/2867458]`|[![bilibili_logo]](https://space.bilibili.com/2867458)|
|2|`[![blog-logo]][blog-link]`|[![blog-logo]][blog-link]|

因为图片本身和链接本身都支持URL标识符的形式，所以图片链接也可以很简洁。
注意，此时鼠标悬停时显示的文字是图片的title，而非链接本身的title了。

本文URL标识符都放置于html文末

# 图片
****

### 引用一个图片
```markdown
![alt](URL "title")
```  
alt和title即对应HTML中的alt和title属性（都可省略）：

- alt表示图片显示失败时的替换文本
- title表示鼠标悬停在图片时的显示文本（注意这里要加引号）
- 还可以在末尾定义图片的大小或比例

```markdown
![alt](URL){:class="img-responsive"}
![alt](URL){:height="50%" width="50%"}
![alt](URL){:height="200px" width="400px"}
```  
![markdown-to-html](/assets/images/other/markdown-to-html.png "markdown-to-html" ){:height="50%" width="50%"}


# 引用嵌套：
****

	> This is the first level of quoting.
	>
	> > This is nested blockquote.
	>
	> Back to the first level.

也可以嵌套其他格式：

	> ##### 这是一个h5标题。
	>
	> 1.   这是第一行列表项。
	> 2.   这是第二行列表项。
	>
	> 给出一些例子代码：
	>
	>     return shell_exec("echo $input | $markdown_script");

<br/>

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.



> ##### 这是一个h5标题。
>
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
>
> 给出一些例子代码：
>
>     return shell_exec("echo $input | $markdown_script");

# 引用代码
****
需要引用代码时，如果引用的语句只有一段，不分行，可以用反引号\`将内联代码语句包起来，它们会解释成`<code>`标签（如果代码的内容中有反引号，请用两个反引号包裹，与前后两个反引号之间加空格。代码中的&、<、>符号都会自动转义）。如果引用的语句为多行，可以将三个反引号\`\`\`置于这段代码的首行和末行。看不清这个符号的，在tab键上面那个，反引号就是。

# 代码高亮
****

```python
def hello():
  return "hello world!"
```

{% highlight ruby linenos %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}


**diff语法**  
版本控制的系统中都少不了diff的功能，即展示一个文件内容的增加与删除。
GFM中可以显示的展示diff效果。使用绿色表示新增，红色表示删除。

其语法与代码高亮类似，只是在三个反引号后面写diff，
并且其内容中，以 `+ `开头表示新增，`- `开头表示删除。

效果如下：

```diff
+ 鸟宿池边树，僧敲月下门
- 鸟宿池边树，僧推月下门
```

<br/>

# mermaid绘图
****
第一种方法：无需插件在jekyll嵌入图表，只需在网页上引用mermaid

```html
<script src="https://cdn.bootcss.com/mermaid/7.1.0/mermaid.min.js"></script>
```
```html
<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>
```
<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>

第二种方法：jekyll-mermaid Plugin

```html
{% raw %}
{% mermaid %}
　　　dateFormat　YYYY-MM-DD
　　　title Adding GANTT diagram functionality to mermaid
　　　section A section
　　　Completed task　　:done, des1, 2014-01-06,2014-01-08
　　　Active task 　　　　:active, des2, 2014-01-09, 3d
　　　future task 　　　　:　　　  des3, after des2, 5d
　　　future task2　　　　:　　　  des4, after des3, 5d
　　　section Critical tasks
　　　Completed task in the critical line　:crit, done, 2014-01-06,24h
　　　Implement parser and json　　　　　　:crit, done, after des1, 2d
　　　Create tests for parser　　　　　　　:crit, active, 3d
　　　Future task in critical line　　　　　:crit, 5d
　　　Create tests for renderer　　　　　　:2d
　　　Add to ,mermaid　　　　　　　　　　　:1d
{% endmermaid %}
{% endraw %}
```
<div class="mermaid">
gantt
　　　dateFormat　YYYY-MM-DD
　　　title Adding GANTT diagram functionality to mermaid
　　　section A section
　　　Completed task　　:done, des1, 2014-01-06,2014-01-08
　　　Active task 　　　　:active, des2, 2014-01-09, 3d
　　　future task 　　　　:　　　  des3, after des2, 5d
　　　future task2　　　　:　　　  des4, after des3, 5d
　　　section Critical tasks
　　　Completed task in the critical line　:crit, done, 2014-01-06,24h
　　　Implement parser and json　　　　　　:crit, done, after des1, 2d
　　　Create tests for parser　　　　　　　:crit, active, 3d
　　　Future task in critical line　　　　　:crit, 5d
　　　Create tests for renderer　　　　　　:2d
　　　Add to ,mermaid　　　　　　　　　　　:1d
</div>


mermaid参考手册：<https://github.com/knsv/mermaid>

# 视频
****
使用**embed**标签添加B站视频
<embed height="600" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=14099326&page=3" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" width="100%">  
<br>

# 音乐
****
使用**iframe**标签添加网易云音乐播放器
<iframe src="http://music.163.com/outchain/player?type=0&amp;id=883384627&amp;auto=0&amp;height=430" width="100%" height="430" frameborder="no" marginwidth="0" marginheight="0"></iframe> 

<br/>

***


<h3>相关链接：</h3>

1. <https://kramdown.gettalong.org/quickref.html> (*kramdown Quick Reference*)  
2. <http://www.jianshu.com/p/2e52f1fae9ff> (*为什么你应该用Markdown写作？* —<a href="http://www.jianshu.com/u/neLruC">王佩</a>)  
3. <https://www.zhihu.com/question/19637157> (*用 Markdown 写作用什么文本编辑器？*)  
4. <https://github.com/guodongxiaren/README> (*README文件语法解读，即Github Flavored Markdown(GFM)语法介绍*  —<a href="https://github.com/guodongxiaren">果冻虾仁</a>)

***

<!-- URL标识符 -->
[bilibili_logo]:https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511882026078&di=cb129bdff684094012a46e8e8d9d4780&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc2cec3fdfc03924594d4502a8094a4c27d1e25b5.jpg "我的B站空间，欢迎关注"
[bilibili_zone]:https://space.bilibili.com/2867458 "我的B站空间，欢迎关注"
[blog-logo]:https://github.com/Observer-L/Observer-L.github.io/blob/master/assets/images/base/favicon.png?raw=true "点击图片进入我的个人博客"
[blog-link]:http://www.elpsycongroo.cc