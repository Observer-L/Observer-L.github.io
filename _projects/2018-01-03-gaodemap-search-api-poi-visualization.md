---
title: '高德地图POI数据可视化'
subtitle: ''
date: 2018-01-03 00:00:00
featured_image: 'images/projects/GaodeMapSearchAPI.png'
---
## 摘要
城市地区的地图兴趣点（point of interest, POI）主要包括城市内具有标志性作用的实地建筑物，并描述这些实体建筑物的空间和属性信息。  
此次利用高德地图Web服务的[搜索API](https://lbs.amap.com/api/webservice/guide/api/search/)和数据可视化可视化软件tableau来探索以下关键词的POI：`电玩城` `鬼屋` `女仆咖啡屋` `真人cs` `桌游`

## 数据来源及数据处理 
+ 数据来源

POI数据来自高德地图搜索服务API。数据可视化使用全国范围内截至2017年12月25号的数据，共**26341**条，每条POI数据包括**经度**、**纬度**、**名称**、**地址**、**类型**、**行政区**、**行政编码**和**联系电话**共**8**个属性。<br/>
按照类型统计，POI数据共归为**19**大类，如交通设施服务、住宿服务、体育休闲服务、生活服务、餐饮服务、科教文化服务等。每一大类下又包括多级小类。以餐饮服务类为例，该一级类别下又包括中餐厅、咖啡厅和快餐厅等二级类别，中餐厅下又被分成海鲜酒楼、火锅店、江苏菜等3级类别。  
另外还从国家数据网提取了地区分类（东中西、港澳台）和GDP的分省数据。  

+ 数据处理

原始POI数据分类较多，且每一大类下包括多级小类，类型之间存在重复交叉现象(详见[高德地图POI分类编码](https://lbs.amap.com/api/webservice/download))，如宿舍既存在于商务住宅的住宅区中，同时又存在在科教文化服务的学校中，因此需要对原始数据重分类。
![关键词类别筛选结果](/images/projects/GaodeMapPOIchart.png)
<p style="text-align: center;padding-bottom: 26px; font-size: 14px;">关键词类别筛选结果</p>

尽管如此，里面存在不少垃圾数据。
例如电玩城在餐饮服务业有数据，查看数据源里甚至有足浴城、KTV和老年活动中心：

![初始数据](/images/projects/GdMap_data.jpg )

```sql
IF  NOT  CONTAINS([name], 'KTV') 
	AND  NOT  CONTAINS([name],'足浴城')
	...
THEN [name]
END
```
最终得到**25600**条数据

----
<h2 id="demo">Demo</h2>
我爱打电玩，哪里有<span style="color: #4e79a7">**电玩城**</span>？  
给我来点刺激！<span style="color: #f28e2b">**鬼屋**</span>什么的！  
二次元！<span style="color: #e15759">**女仆咖啡店**</span>？！！  
我还要打<span style="color: #76b7b2">**CS**</span>，<span style="color: #76b7b2">**真人**</span>的那种！  
还有<span style="color: #59a14f">**桌游**</span>，朋友聚会要玩！


### 行！看图说话吧！
<iframe src="https://public.tableau.com/views/POI_1_1/API?:showVizHome=no&:embed=true&:embed_code_version=3&:loadOrderID=0&:display_count=yes&publish=yes" frameborder="0" width="905px" height="750px" style="display: block; margin: 0 auto;"></iframe>

考虑到这些形式较为新鲜的关键词是很吃流量的，大多POI都处在东部，特别是人口密集、流量大的省会城市或城市群也就不奇怪了。电玩城最多，且各省均有分布。使用关键词筛选器，将电玩城取消勾选可以看到其他关键词的POI分布较电玩城就显得少且松散得多。  

### POI的各地区分布情况
<iframe src="https://public.tableau.com/views/POI_2_0/7_1?:showVizHome=no&:embed=true&:embed_code_version=3&:loadOrderID=1&:display_count=yes&publish=yes" frameborder="0" width="905px" height="750px" style="display: block; margin: 0 auto;"></iframe>

电玩城看起来比较普遍，我们来看看其他几个关键词在各个地区的分布情况。  
东部地区依旧最多，其中名列前茅的是上海市、广东省和四川省。澳门居然只有1个POI（桌游），特意去高德地图搜了下也确实如此。
上海的人口和土地面积虽然不比广东和四川，但是POI数量却能与它们并驱争先（即使加上电玩城上海依旧排第二，仅次广东高于北京）。桌游吧在前几年开始在全国遍地开花，北京和上海的桌游文化在国内是比较强的。上海土地小人口多，人流量大且开放程度高为这座城市带来了多元的文化。

### POI与GDP
<iframe src="https://public.tableau.com/views/POI_4_0/9?:embed=y&:showVizHome=no&:embed_code_version=3&:loadOrderID=2&:display_count=yes&publish=yes" frameborder="0" width="905px" height="750px" style="display: block; margin: 0 auto;"></iframe>

GDP的多少与POI数量存在有正相关的关系。广东最为突出，上海依旧碾压许多其他地区。



### 女仆咖啡屋都开在了哪？
<iframe src="https://public.tableau.com/views/POI_3_0/8_1?:embed=y&:showVizHome=no&:embed_code_version=3&:loadOrderID=3&:display_count=yes&publish=yes" frameborder="0" width="905px" height="750px" style="display: block; margin: 0 auto;"></iframe>


这种外来的二次元文化的店，长期来看，消费主力肯定是<del>死宅</del>、学生和年轻上班族。另外人流量大的广场或车站附近也是合适的选址。
<img src="/images/projects/GaodeMapPOInpcf6.png" width="80%">
<p style="text-align: center;padding-bottom: 26px; font-size: 14px;">学校与市中心</p>
<img src="/images/projects/GaodeMapPOInpcf.png" width="80%">
<img src="/images/projects/GaodeMapPOInpcf2.png" width="80%">
<img src="/images/projects/GaodeMapPOInpcf5.png" width="80%">
<p style="text-align: center;padding-bottom: 26px; font-size: 14px;">学校</p>
<img src="/images/projects/GaodeMapPOInpcf3.png" width="80%">
<img src="/images/projects/GaodeMapPOInpcf4.png" width="80%">
<p style="text-align: center;padding-bottom: 26px; font-size: 14px;">车站</p>
<img src="/images/projects/GaodeMapPOInpcf7.png" width="80%">
<p style="text-align: center;padding-bottom: 26px; font-size: 14px;">公园与写字楼</p>

### 鬼屋在广东
<iframe src="https://public.tableau.com/views/POI_6_0/10?:embed=y&:showVizHome=no&:embed_code_version=3&:loadOrderID=4&:display_count=yes" frameborder="0" width="905px" height="750px" style="display: block; margin: 0 auto;"></iframe>

专以鬼屋为主题的游乐场还是比较少的，它们大多都与其他项目捆绑一起营业，例如密室逃脱之类。
热爱体育，休闲活动的你可以尝试着去探索这些POI！