---
layout: post
title: "使用CSS动画"
date: 2018-01-01
categories:
  - Portfolio
  - Study_Notes
description: "简单介绍一下CSS动画以及在本博客的使用实例。"
img_words: 
image: /assets/images/other/animate_css.gif
image-sm: /assets/images/other/animate_css.gif
comments: true
---

## CSS动画有什么优点？
> + 对前端来说简单易用；
> + 声明式的动画，浏览器内核更容易进行优化，也避免了 JavaScript 的低性能和性能波动（GC或者JIT导致的停顿）导致掉帧；
> + 部分加速的CSS动画（Transform & Opacity）可以完全由内核的合成器驱动，完全使用GPU加速，对CPU的开销很小；
> + 随着内核合成器的持续演进，可加速的CSS动画有望越来越多；   
>
> 作者：易旭昕   
> 来源：[知乎](https://www.zhihu.com/question/27849007/answer/38433335 "跳转至知乎作者回答")

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">

## 配置动画
什么是 CSS3 中的动画？
动画是使元素从一种样式逐渐变化为另一种样式的效果。  
您可以改变任意多的样式任意多的次数。  
请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。  
0% 是动画的开始，100% 是动画的完成。  
为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。  


CSS3 动画属性
下面的表格列出了`@keyframes`规则和所有动画属性：

|属性|描述|
| ---------- | -----------|
| `@keyframes` | 规定动画|
| `animation` | 	所有动画属性的简写属性，除了 animation-play-state 属性|
| `animation-name` | 	规定 @keyframes 画的名称|
| `animation-duration`  | 规定动画完成一个周期所花费的秒或毫秒。默认是 0  |
| `animation-timing-function`| 规定动画的速度曲线。默认是 ease |
| `animation-delay`   | 规定动画何时开始。默认是 0    |
| `animation-iteration-count` | 规定动画被播放的次数。默认是 1 ，可以指定infinite无限次重复动画|
| `animation-direction` | 规定动画是否在下一周期逆向地播放。默认是 normal  |
| `animation-play-state` | 规定动画是否正在运行或暂停。默认是 running  |
| `animation-fill-mode` | 规定对象动画时间之外的状态|

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">

## 实例

<p data-height="346" data-theme-id="0" data-slug-hash="QavXVG" data-default-tab="css,result" data-user="Observer-L" data-embed-version="2" data-pen-title="Making text slide across the browser window" class="codepen">See the Pen <a href="https://codepen.io/Observer-L/pen/QavXVG/">文字飞过</a> by 观测者 (<a href="https://codepen.io/Observer-L">@Observer-L</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<p data-height="398" data-theme-id="0" data-slug-hash="MrmMzv" data-default-tab="css,result" data-user="Observer-L" data-embed-version="2" data-pen-title="按钮实例" class="codepen">See the Pen <a href="https://codepen.io/Observer-L/pen/MrmMzv/">按钮实例</a> by 观测者 (<a href="https://codepen.io/Observer-L">@Observer-L</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<p data-height="300" data-theme-id="0" data-slug-hash="mpmZYd" data-default-tab="css,result" data-user="Observer-L" data-embed-version="2" data-pen-title="下划线Hover动画" class="codepen">See the Pen <a href="https://codepen.io/Observer-L/pen/mpmZYd/">下划线Hover动画</a> by 观测者 (<a href="https://codepen.io/Observer-L">@Observer-L</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<p data-height="401" data-theme-id="0" data-slug-hash="vpJxJB" data-default-tab="result" data-user="Observer-L" data-embed-version="2" data-pen-title="404了？！去你的吧！！！" class="codepen">See the Pen <a href="https://codepen.io/Observer-L/pen/vpJxJB/">404了？！去你的吧！！！</a> by 观测者 (<a href="https://codepen.io/Observer-L">@Observer-L</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">
### 相关链接：
1. <http://www.jianshu.com/p/2e52f1fae9ff> (*Using CSS animations* —<a href="http://www.jianshu.com/u/neLruC">MDN Web 文档</a>)  
2. <http://www.w3school.com.cn/css3/css3_animation.asp> (*W3school CSS3动画*)  
3. <http://https://daneden.github.io/animate.css/> (*Animate.css 一款强大的预设css3动画库*) 
<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">