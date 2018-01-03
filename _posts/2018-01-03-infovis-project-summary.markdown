---
layout: post
title: "数据可视化课程项目总结"
date: 2018-01-03
categories:
  - Study_Notes
description: "无论是阅读还是制作，我尤其喜欢用视觉语言讲故事。对于数据可视化，我也算是个小白爱好者。数据可视化其实在日常生活中有许多应用，例如地铁路线图、智能手表、气象地图、体育赛事、双十一数据大屏等..."
img_words: "数据可视化是手段<br/>不是目的"
image: /assets/images/other/scribble&programmer.jpg
image-sm: /assets/images/other/scribble&programmer.jpg
comments: true
---  

## 前言
无论是阅读还是制作，我尤其喜欢用视觉语言讲故事。  
对于数据可视化，我也算是个小白爱好者。  
数据可视化其实在日常生活中有许多应用，例如地铁路线图、智能手表、气象地图、体育赛事、双十一数据大屏等。

<table><tr>  
<td><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514971811633&di=2cbebf92b63830a9663195537b6fd11b&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170327%2F1a787fc1b8114d0c8a15c3047fcf8080_th.jpeg" alt="阿里云DataV双十一大屏" width="100%">阿里云DataV双十一大屏</td>

<td><img src="https://pic3.zhimg.com/v2-960e1170a1e5adae1477ca36088fafa4_r.jpg" alt="2016美国总统选举" width="100%">2016美国总统选举</td>
</tr></table>

<br/>

#### 数据可视化的重要性
数据可视化已经成为了现代商业智能（BI，Business Intelligence）的事实上的标准了。几乎所有BI软件都有强大的数据可视化功能，**tableau**和**Qlik**是这个领域的领导者。  

数据可视化工具在数据民主化和数据分析以及为用户做出数据驱动的见解中十分重要。
它们通常比传统的统计分析软件或更早版本的BI软件容易操作。这使得业务线实现增长，在无需IT支持的情况下用工具自己实现数据可视化。  

数据可视化软件在大数据和先进的分析项目中扮演着重要角色。随着企业在早年大数据趋势下积累了越来越多的大量收集而来的数据，它们需要一种能够快速方便地获得数据概览的方法。可视化工具自然最适合不过了。  

在某些方面上，可视化是先进分析的核心。当数据科学家正在编写高级预测分析或机器学习算法时，可视化输出以监控结果并确保模型按预期执行是非常重要的。这是因为复杂算法的可视化通常比数字输出更容易解释。

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">

## 想成为一名数据可视化工程师？
如果你会编程懂设计会讲故事，对数据可视化感兴趣，不妨试试当一名数据可视化工程师。  
巧的是，网络与新媒体专业开了Python、网页设计、数据可视化三门课程。推荐你从前端切入数据可视化领域。

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">

## 期中项目
课程的期中项目限定使用国家数据网数据，我打算做中国地震的数据可视化，无奈国家数据网于这方面的数据又少又简。于是在此前提下又从[中国地震台网](http://data.stats.gov.cn/)和[美国地质勘探局（USGS）](https://www.usgs.gov/)拿到了更多有利于详细分析的数据，最后成功完成[期中项目](http://www.elpsycongroo.cc/2017/10/22/china-earthquakes-visualization/)。

#### 碰到了什么问题？

+ 我想把每次地震映射在地图上，在做地图气泡图时不同震级的气泡反差小，于是在原数据上创建计算字段：

```
POWER([震级(M)],10)
```

“震级^10”包含更宽的值范围，因此可以直观地看到值之间的差异。
<table><tr>  
<td><img src="/assets/images/other/M_sc.png" alt="差异小" width="100%"></td>
<td><img src="/assets/images/other/M_bc.png" alt="差异大" width="100%"></td>
</tr></table>

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">

## 期末项目
利用高德地图Web服务的[搜索API](http://lbs.amap.com/api/webservice/guide/api/search/)用Python抓取数据，做一个中国“新兴”的活动或业务地理分布可视化。  
关键词是：`电玩城` `鬼屋` `女仆咖啡屋` `真人cs` `桌游`  
数据量：26341  
成品展示：[原文链接](http://www.elpsycongroo.cc/2018/01/03/gaodemap-search-api-keywords-visualization/)

#### 碰到了什么问题？
+ 抓取到的数据量是够了，都是里面存在不少垃圾数据。  
例如电玩城在餐饮服务业有数据，查看数据源里甚至有足浴城、KTV和老年活动中心：
![初始数据](/assets/images/other/GdMap_data.jpg )

直接在tableau里面进行数据清洗：

	IF  NOT  CONTAINS([name], 'KTV') 
		AND  NOT  CONTAINS([name],'足浴城')
		...
	THEN [name]
	END

<hr style="border-top:3px solid #3f87a6;margin: 50px 0px 50px 0px;">

## 数据可视化的误区
> 数据可视化很重要，但是市场上经常出现可视化过度的现象。可视化的最终目的是为了更清晰得传递信息，而不是让图表更好看更炫目。但是现在往往本末倒置，为了图表炫目反而让信息读起来更费劲。可视化的最终目的是为了更清晰得传递信息，而不是让图表更好看更炫目。但是现在往往本末倒置，为了图表炫目反而让信息读起来更费劲。
数据可视化，本在数据。数据都表达不清的话宁愿直接挂个简洁的表上去。  ———何克明，[知乎](https://www.zhihu.com/people/he-ming-ke/activities)


> 数据可视化是很重要的（手段），但不是很重要的（目的） ———邹昕，[知乎](https://www.zhihu.com/people/xin_zou/activities)


> 最好的可视化是用最简单的图表、最合适的方式来表达自己想要表达的，表达别人想看的、别人需要的信息。 ———路人甲，[知乎](https://www.zhihu.com/people/sgai/activities)