---
title: 用css实现图片在div内的垂直居中
date: 2016-07-15 16:15:29
tags:
---
关于图片垂直居中的问题大家应该都遇到过，大家应该也有搜索过，这里整理了一份此类问题希望对大家有帮助

div相对与table对于图片的垂直居中支持的并不好,特别对于不同浏览器的兼容性来说,这里我们看下一个简洁的css解决方法:

在曾经的 淘宝UED 招聘 中有这样一道题目：

“使用纯CSS实现未知尺寸的图片(但高宽都小于200px)在200px的正方形容器中水平和垂直居中。”

当然出题并不是随意，而是有其现实的原因，垂直居中是 淘宝 工作中最常遇到的一个问题，很有代表性。
题目的难点在于两点：

1.垂直居中；

2.图片是个置换元素，有些特殊的特性。

至于如何解决，下面是一个权衡的相对结构干净，CSS简单的解决方法：


	.box { 
	/*非IE的主流浏览器识别的垂直居中的方法*/ 
	display: table-cell; 
	vertical-align:middle; 
	/*设置水平居中*/ 
	text-align:center; 
	/* 针对IE的Hack */ 
	*display: block; 
	*font-size: 175px;/*约为高度的0.873，200*0.873 约为175*/ 
	*font-family:Arial;/*防止非utf-8引起的hack失效问题，如gbk编码*/ 
		width:200px; 
		height:200px; 
		border: 1px solid #eee; 
	} 
	.box img { 
		/*设置图片垂直居中*/ 
		vertical-align:middle; 
	} 
	<div class="box"> 
		<img src="http://pics.taobao.com/bao/album/promotion/    taoscars_180x95_071112_sr.jpg" /> 
	</div> 
大家可以根据自己的问题修改代码
