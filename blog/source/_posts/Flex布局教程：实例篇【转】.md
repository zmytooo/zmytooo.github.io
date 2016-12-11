---
title: Flex布局教程：实例篇【转】
date: 2016-11-01 20:26:16
tags: [html,css]
---
 本篇博客转至 阮一峰–Flex 布局教程：实例篇

# Flex 布局教程：实例篇
今天介绍常见布局的Flex写法。

你会看到，不管是什么布局，Flex往往都可以几行命令搞定。
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071327.png)
## 一、骰子的布局
骰子的一面，最多可以放置9个点。

![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071328.png)

下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到codepen查看Demo。

![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071329.png)

如果不加说明，本节的HTML模板一律如下。

	<div class="box">
    	<span class="item"></span>
	</div>
上面代码中，div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推。

### 1.1 单项目
首先，只有左上角1个点的情况。Flex布局默认就是首行左对齐，所以一行代码就够了。
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071301.png)

	.box {
    	display: flex;
	}
设置项目的对齐方式，就能实现居中对齐和右对齐。
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071302.png)

	.box {
    	display: flex;
    	justify-content: center;
	}
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071303.png)

	.box {
    	display: flex;
    	justify-content: flex-end;
	
设置交叉轴对齐方式，可以垂直移动主轴。

![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071304.png)

	.box {
    	display: flex;
    	align-items: center;
	}
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071305.png)

	.box {
		display: flex;
		justify-content: center;
 		align-items: center;
	}
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071306.png)

	.box {
		display: flex;
		justify-content: center;
	 	align-items: flex-end;
	}
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071307.png)

	.box { 
    	display: flex;
    	justify-content: flex-end;
     	align-items: flex-end;
	}

## 二、网格布局
### 2.1 基本网格布局
最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071321.png)
HTML代码如下。

	<div class="Grid">
  		<div class="Grid-cell">...</div>
  		<div class="Grid-cell">...</div>
  		<div class="Grid-cell">...</div>
	</div>
CSS代码如下。

	.Grid {
  		display: flex;
	}
	.Grid-cell {
  		flex: 1;
	}
### 2.2 百分比布局
某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071322.png)
HTML代码如下。

	<div class="Grid">
  		<div class="Grid-cell u-1of4">...</div>
  		<div class="Grid-cell">...</div>
  		<div class="Grid-cell u-1of3">...</div>
	</div>

	.Grid {
  		display: flex;
	}

	.Grid-cell {
  		flex: 1;
	}

	.Grid-cell.u-full {
  		flex: 0 0 100%;
	}

	.Grid-cell.u-1of2 {
 		 flex: 0 0 50%;
	}

	.Grid-cell.u-1of3 {
  		flex: 0 0 33.3333%;
	}

	.Grid-cell.u-1of4 {
  		flex: 0 0 25%;
	}
## 三、圣杯布局
圣杯布局（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。

![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071323.png)
HTML代码如下。

	<body class="HolyGrail">
  	<header>...</header>
  	<div class="HolyGrail-body">
    	<main class="HolyGrail-content">...</main>
    	<nav class="HolyGrail-nav">...</nav>
    	<aside class="HolyGrail-ads">...</aside>
  	</div>
  	<footer>...</footer>
	</body>
CSS代码如下。

	.HolyGrail {
  		display: flex;
  		min-height: 100vh;
 		flex-direction: column;
	}

	header,
	footer {
  		flex: 1;
	}

	.HolyGrail-body {
  		display: flex;
  		flex: 1;
	}

	.HolyGrail-content {
  		flex: 1;
	}

	.HolyGrail-nav, .HolyGrail-ads {
  		/* 两个边栏的宽度设为12em */
  		flex: 0 0 12em;
	}

	.HolyGrail-nav {
  		/* 导航放到最左边 */
  		order: -1;
	}
如果是小屏幕，躯干的三栏自动变为垂直叠加。

	@media (max-width: 768px) {
  		.HolyGrail-body {
    		flex-direction: column;
    		flex: 1;
  		}
  		.HolyGrail-nav,
  		.HolyGrail-ads,
  		.HolyGrail-content {
   			flex: auto;
  		}
	}
## 四、悬挂式布局
有时，主栏的左侧或右侧，需要添加一个图片栏。
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071325.png)
HTML代码如下。

	<div class="Media">
  	<img class="Media-figure" src="" alt="">
  	<p class="Media-body">...</p>
	</div>
CSS代码如下。

	.Media {
 		display: flex;
  		align-items: flex-start;
	}

	.Media-figure {
  		margin-right: 1em;
	}

	.Media-body {
  		flex: 1;
	}
## 五、固定的底栏
有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071326.png)
HTML代码如下。

	<body class="Site">
  	<header>...</header>
  	<main class="Site-content">...</main>
  	<footer>...</footer>
	</body>
CSS代码如下。

	.Site {
  		display: flex;
  		min-height: 100vh;
  		flex-direction: column;
	}

	.Site-content {
  		flex: 1;
	}
## 六，流式布局
每行的项目数固定，会自动分行。
![Alt text](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071330.png)
CSS的写法。

	.parent {
  		width: 200px;
  		height: 150px;
  		background-color: black;
  		display: flex;
  		flex-flow: row wrap;
  		align-content: flex-start;
	}

	.child {
  		box-sizing: border-box;
  		background-color: white;
  		flex: 0 0 25%;
  		height: 50px;
  		border: 1px solid red;
	}