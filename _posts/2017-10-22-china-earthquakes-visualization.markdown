---
layout: post
title: "中国地震数据可视化"
date: 2017-10-22
categories:
  - Data_Visualization
description:
image: /assets/images/tech/China__2012~2017_Earthquakes_Visualization.png
image-sm: /assets/images/tech/China__2012~2017_Earthquakes_Visualization.png
---
### 概要 
------ 
中国在十年间（2006-2015）发生了126次里氏5.0级以上的地震，其中包括5次里氏7.0级的大地震，不仅带来了巨大的人员伤亡，对震区经济也带来了沉重打击。其中最严重的是08年的里氏8.0级的汶川大地震，仅此一震，人员伤亡和经济损失就占了大半。

### 说明
------ 
地理位置：中国  
时间周期：2006-2015  
分析单位：地震及其影响  
数据集：包含了`地区、年份、地震灾害次数、发生地质灾害次数、5.0-5.9级地震、6.0-6.9级地震、7.0级以上地震、人员伤亡、死亡人数、地方财政一般性预算支出、地方财政地震灾后重建支出、人口自然增长率、人口死亡率、人口出生率、地区生产总值、直接经济损失、医疗卫生机构数、地方财政医疗卫生支出、卫生人员数`  
共 **19** 个指标   
数据来源：[中国国家数据网](http://data.stats.gov.cn/)

### 灵感
------ 
带着一颗好奇的心，借用tableau来帮我探索这些想法：

* 中国十年来发生了多少地震（5.0级以上）？
* 将地震次数可视化在地图上！
* 地震发生后震区的医疗发展情况如何？
* 医疗财政支出和医疗发展是否有某种联系？
* 发震是否存在周期性？哪段时间是多发期？
* 哪个地区受地震影响最严重？
* 震区的灾后重建力度如何？
* 地震人员伤亡对人口造成了什么影响？   
  
### Demo
------ 
<div class='tableauPlaceholder' id='viz1510142657925' style='position: relative'><noscript><a href='#'><img alt='故事 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;de&#47;demo2_26&#47;1_1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='demo2_26&#47;1_1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;de&#47;demo2_26&#47;1_1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                
<script type='text/javascript'>                    var divElement = document.getElementById('viz1510142657925');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1016px';vizElement.style.height='944px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>