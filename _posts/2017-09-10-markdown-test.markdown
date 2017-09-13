---
layout: post
title: "Markdown语法测试"
date: 2017-09-10
categories:
  - Test
description:
image: /assets/images/base/observers.jpg
image-sm: /assets/images/base/observers.jpg
---
<h1>视频</h1>
****
使用<b>embed</b>标签添加B站视频
<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=14099326&page=3" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash">  
<br>
<h1>标题</h1>
****
<h1>This is an H1</h1>
<h2>This is an H2</h2>
<h3>This is an H3</h3>
<h4>This is an H4</h4>
<h5>This is an H5</h5>
<h6>This is an H6</h6>
<br>
<h1>粗斜体</h1>
****
*斜体文本*    _斜体文本_
**粗体文本**    __粗体文本__
***粗斜体文本***    ___粗斜体文本___  
<br>

<h1>链接</h1>
****
文字链接 [百度](http://www.baidu.com)
<br>
网址链接 <http://www.baidu.com>  
<br>

<h1>列表</h1>
****
<h3>普通无序列表</h3>
- 列表文本前使用 [减号+空格]
+ 列表文本前使用 [加号+空格]
* 列表文本前使用 [星号+空格]
<h3>普通有序列表</h3>
1. 列表前使用 [数字+空格]
2. 我们会自动帮你添加数字
7. 不用担心数字不对，显示的时候我们会自动把这行的 7 纠正为 3

<br>
<h1>图片</h1>
****
<h3>跟链接的方法区别在于前面加了个感叹号 !</h3>
```python
![logo](http://example.com/sample.png)
```
![logo](/assets/images/base/observers.jpg)
<h3>也可以使用 HTML 的图片语法来自定义图片的宽高大小</h3>
```python
<img src="http://example.com/sample.png" width="100" height="100">
```
<img src="https://avatars0.githubusercontent.com/u/28595171?v=4&u=d39766f6e9646f8a8ef138fb0e228e7c09fb6cc1&s=400">
<br>
<h1>换行</h1>
****
<h3>如果另起一行，只需在当前行结尾加 2 个空格</h3>
在当前行的结尾加 2 个空格  
这行就会新起一行  
<br>
<h1>分隔符</h1>
****
<h4>如果你有写分割线的习惯，可以新起一行输入三个以上的减号-或*号。当前后都有段落时，请空出一行：</h4>
前面的段落

***

---

后面的段落

<br>
<h1>代码高亮</h1>
****

```python
def hello():
  return "hello world!"
```

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

<br>
<h1>高级技巧</h1>
****
<h3>待续...</h3>
