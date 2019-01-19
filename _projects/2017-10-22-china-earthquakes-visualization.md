---
title: '中国地震数据可视化'
subtitle: ''
date: 2017-10-22 00:00:00
featured_image: 'images/projects/China__2012~2017_Earthquakes_Visualization.png'
---
## 概要 
中国是一个多地震的国家。我国地处世界两大地震带（环太平洋地震带和喜马拉雅山——地中海地震带）之间。
受此影响，我国地震活动不仅频度高，强度大，
而且地震活动的范围很广，几乎全国各省均发生过强震。
据统计，我国大陆地震约占世界大陆地震的三分之一。
本世纪以来全球大陆7级以上强震，我国约占领35%，是一个多地震的国家。  
本次将利用数据可视化软件**tableau**对中国地震数据进行可视化分析。

## 说明
第一部分  
时间周期：2006-2015  
分析单位：地震及其社会影响  
数据集：包含了**地区、年份、地震灾害次数、发生地质灾害次数、5.0-5.9级地震、6.0-6.9级地震、7.0级以上地震、人员伤亡、死亡人数、地方财政一般性预算支出、地方财政地震灾后重建支出、人口自然增长率、人口死亡率、人口出生率、地区生产总值、直接经济损失、医疗卫生机构数、地方财政医疗卫生支出、卫生人员数** ，  
共 **19** 个指标   
数据来源：[中国国家数据网](http://data.stats.gov.cn/)

第二部分  
时间周期：2000-2017.10  
数据集：在第一部分的基础上拉伸时间尺度并增加了**震级（多级别层次）、震源深度**两个指标  
数据来源：  [中国地震台网数据 - CENC](http://data.stats.gov.cn/)  &nbsp;&nbsp;[美国地质勘探局 - USGS](https://www.usgs.gov/)

## 灵感
带着一颗好奇的心，借用tableau来帮我探索这些想法：

* 中国十年来发生了多少地震（5.0级以上）？
* 将地震可视化在地图上！
* 中国是深源地震多还是浅源地震多？
* 地震发生后震区的医疗发展情况如何？
* 医疗财政支出和医疗发展是否有某种联系？
* 发震是否存在周期性？哪段时间是多发期？
* 哪个地区受地震影响最严重？
* 西南地区地震活动如何？
* 震区的灾后重建力度如何？
* 地震人员伤亡对人口造成了什么影响？   
  
## Demo1
------ 
<div class='tableauPlaceholder' id='viz1510142657925' style='position: relative;'>
	<noscript>
		<a href='#'><img alt='故事 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;de&#47;demo2_26&#47;1_1&#47;1_rss.png' style='border: none' /></a>
	</noscript>

	<object class='tableauViz'  style='display:none;'>
		<param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
		<param name='embed_code_version' value='3' /> 
		<param name='site_root' value='' />
		<param name='name' value='demo2_26&#47;1_1' />
		<param name='tabs' value='no' />
		<param name='toolbar' value='yes' />
		<param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;	images&#47;de&#47;demo2_26&#47;1_1&#47;1.png' /> 
		<param name='animate_transition' value='yes' />
		<param name='display_static_image' value='yes' />
		<param name='display_spinner' value='yes' />
		<param name='display_overlay' value='yes' />
		<param name='display_count' value='yes' />
	</object>
</div>                

<br/>

## Demo2
------ 

![China__2012~2017_Earthquakes_Visualization.gif](/images/projects/China__2012~2017_Earthquakes_Visualization.gif)

<div class='tableauPlaceholder' id='viz1511970168024' style='position: relative;'>
	<noscript><a href='#'><img alt='仪表板 9 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;_1&#47;_16779&#47;9&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='_16779&#47;9' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;_1&#47;_16779&#47;9&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='filter' value='publish=yes' /></object></div>         

<script type='text/javascript'>                    var divElement = document.getElementById('viz1511970168024');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1000px';vizElement.style.height='4027px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>

<script type='text/javascript'>                    var divElement = document.getElementById('viz1510142657925');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1016px';vizElement.style.height='944px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>