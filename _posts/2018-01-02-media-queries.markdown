---
layout: post
title: "CSS媒体查询"
date: 2018-01-02
categories:
  - Study_Notes
description: "一个媒体查询由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜色。媒体查询，添加自CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身。"
img_words: Media Queries
image: /assets/images/svg/screen-size-and-media-queries-1-730x335.svg
image-sm: /assets/images/svg/screen-size-and-media-queries-1-730x335.svg
comments: true
---  
一个**媒体查询**由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜色。**媒体查询**，添加自CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身。
<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">

## 语法
媒体查询包含一个可选的媒体类型和，满足CSS3规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特征，最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是true，那么该媒体查询的结果为true.

具体的使用方式是：
{% highlight html linenos %}
<!-- link元素中的CSS媒体查询 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- 样式表中的CSS媒体查询 -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
{% endhighlight %}

当媒体查询为true时，其对应的样式表或样式规则就会遵循正常的级联规则进行应用。即使媒体查询返回false，`<link>` 标签指向的样式表也将会被下载(但是它们不会被应用)  

除非使用not或only操作符，否则媒体类型是可选的，默认值是all(全部).  
<br/>

### 逻辑操作符
你可以使用逻辑操作符，包括`not`、`and`和`only`等，构建复杂的媒体查询。`and`操作符用来把多个媒体属性组合成一条媒体查询，对成链式的特征进行请求，只有当每个属性都为真时，结果才为真。`not`操作符用来对一条媒体查询的结果进行取反。`only`操作符仅在媒体查询匹配成功的情况下被用于应用一个样式，这对于防止让选中的样式在老式浏览器中被应用到。若使用了`not`或`only`操作符，必须明确指定一个媒体类型。  
你也可以将多个媒体查询以逗号分隔放在一起；只要其中任何一个为真，整个媒体语句就返回真。相当于`or`操作符。  

+ **and**
+ **,**（也就是 or 的逻辑）
+ **not** （对查询结果取反）
+ **only** （only操作符仅在媒体查询匹配成功的情况下被用于应用一个样式，这对于防止让选中的样式在老式浏览器中被应用到。）

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">
## 媒体特征
大多数媒体属性可以带有“min-”或“max-”前缀，用于表达“最低...”或者“最高...”。例如，max-width:12450px表示应用其所包含样式的条件最高是宽度为12450px，大于12450px则不满足条件，不会应用此样式。这避免了使用与HTML和XML冲突的“<”和“>”字符。如果你未向媒体属性指定一个值，并且该特性的实际值不为零，则该表达式被解析为真。  

#### 常用媒体属性

|属性|描述|
| ---------- | -----------|
| width（视口宽度） | 	定义输出设备中的页面可见区域宽度 |
| height（视口高度） | 	定义输出设备中的页面可见区域高度 |
| device-width（屏幕宽度） | 	定义输出设备的屏幕可见宽度 |
| device-height（屏幕高度） | 	定义输出设备的屏幕可见高度 |
| orientation | 定义输出设备中的页面可见区域高度是否大于或等于宽度 |
| aspect-ratio（视口宽高比） | 	定义输出设备中的页面可见区域宽度与高度的比率 |
| device-aspect-ratio（设备屏幕宽高比）| 定义输出设备的屏幕可见宽度与高度的比率 |
| resolution | 	定义设备的分辨率。如：96dpi, 300dpi, 118dpcm |

<br/>


#### 调整窗口尺寸试试看
<p data-height="490" data-theme-id="0" data-slug-hash="tynas" data-default-tab="result" data-user="chriscoyier" data-embed-version="2" data-pen-title="Animated Media Queries" class="codepen">See the Pen <a href="https://codepen.io/chriscoyier/pen/tynas/">Animated Media Queries</a> by Chris Coyier  (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">
### 相关链接：
1. <http://https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries> (*CSS媒体查询* —<a href="http://www.jianshu.com/u/neLruC">MDN Web 文档</a>)  
2. <http://https://www.w3cschool.cn/cssref/css3-pr-mediaquery.html> (*W3school CSS3 @media查询*)  
<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">
