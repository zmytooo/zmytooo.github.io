---
title: css布局入门【转】
date: 2016-04-02 11:37:39
tags:
---
## 概述
Web 兴起之后，关于CSS的介绍和学习资料已经铺天盖地。
本文不涉及具体的CSS语法之类的，而是希望从初学者的角度，让没有接触或很少接触CSS的人能快速的了解 CSS 到底是什么以及如何使用。

### 什么是 CSS
了解一个概念，首先看到的就是它的名字，而往往被忽略的，也是它的名字。
CSS (cascading style sheets)，可以翻译成中文 层叠样式表 。从名字可以看出：
层叠：说明 样式可以叠加，所以会有优先级
样式表：说明CSS是描述样式的，而且只是个 表 ，不是程序语言，所以后来随着 CSS 的应用越来越多，才会有 Sass 和 Less 这些扩充 CSS 语法的语言出来

### CSS 的作用
CSS 的作用就是样式，其实 Web 只用 HTML也可以做出来，只是随着机器和浏览器性能的提升，人们对网页的美观和易用性要求越来越高，CSS 的重要性才逐渐凸显。
CSS 我觉得有2个主要的作用：

可以将 Web 的样式统一管理，便于修改，类似于程序语言中的变量或者配置文件
将网页内容和样式分离开，让灵活呈现内容成为可能
注意 HTML 才是网页的实际内容，CSS 只是控制HTML元素的如何显示，显示与否。

### CSS for 布局
CSS 在布局上用的最多，就是因为了有了 CSS，才会有所谓的 div+css 布局方式，以前用 HTML 都是 table 布局。

初步了解 div+css 的布局，我觉得了解3点就够了，框模型，定位和浮动。

### 框模型
每个div对于css来说都是一个 框 。每个框由内到外由4部分组成 content padding border margin
div 的长和框由这4部分的长之和和宽之和组成
示例：
	
	<!doctype html>
	<html lang="en">
  	<head>
    <meta charset="UTF-8"/>
    <title>CSS Sample</title>
    <link href="index.css" rel="stylesheet"/>
  	</head>
  	<body>
    	<div>Content</div>
  	</body>
	</html>

	body {
      background-color: #FAEBD7;
	}

	div {
  		width: 100px;
 	 	height: 100px;
 	 	padding: 30px;
 	 	border: 10px solid blue;
 		margin: 10px;
 	 	background-color: red;
  		text-align: center;
	}
例子很简单，但是可以看出：
从外到内 依次是 margin, border, padding, content
div 的 width 和 height 只是 content 的大小

### 定位
理解了 框模型之后，定位也很简单，其实就是将一个个框定位在页面上。
定位分为绝对定位和相对定位。

### 绝对定位
就是在浏览器上的绝对位置，通过 top 和 left 属性设置相对于浏览器左上角的距离

	<!doctype html>
	<html lang="en">
	<head>
	<meta charset="UTF-8"/>
	<title>CSS Sample</title>
	<link href="index.css" rel="stylesheet"/>
	</head>
	<body>
		<div id="div1">Content1</div>
		<div id="div2">Content2</div>
	</body>
	</html>

	body {
      background-color: #FAEBD7;
	}

	div {
  	width: 100px;
  	height: 100px;
  	padding: 30px;
  	border: 10px solid blue;
  	margin: 10px;
  	background-color: red;
  	text-align: center;
  	position: absolute;
	}

	#div1 {
  	top: 100px;
  	left: 100px;
	}

	#div2 {
  	top: 200px;
  	left: 200px;
	}
绝对定位明确但不灵活，除非屏幕大小能固定，否则需要多套css。设置不好会造成元素的重叠。
绝对定位中有个很关键的设置是 position: absolute

### 相对定位
相对定位中每个 div 的 top 和 left 不再是相对浏览器的左上角了。而是相对剩余位置的左上角。
同样是上面的例子，把 position: absolute 换成 position: relative 可以发现2个div 不再重叠了。

### 浮动
div 默认是 inline的，也就是每个 div 占据了一行。
布局时，如果希望多个div排列在一行，那么就会用到浮动（或者用以前的 table方式）
设置 div 浮动属性之后，就可以用div布局出各种结构。

下面以常见的管理系统为例，做一个简单的 div+css 布局

	<!doctype html>
	<html lang="en">
  	<head>
    <meta charset="UTF-8"/>
    <title>CSS Sample</title>
    <link href="index.css" rel="stylesheet"/>
  	</head>
  	<body>
      	<div id="head">head</div>
      	<div id="middle">
    	<div id="nav">nav</div>
    <div id="content">content</div>
 	 </div>
  	<div id="foot">foot</div>
  	</body>
	</html>

	body {
  	background-color: #FAEBD7;
  	height: 100%;
  	margin: 0px;
  	padding: 0px;
	}

	div {
 	 border: 1px solid black;
  	text-align: center;
	}

	#head {
 	height: 50px;
  	width: 100%;
	}

	#middle {
 	 width: 100%;
  	top: 50px;
  	bottom: 100px;
  	left: 0px;
  	position: absolute;
	}

	#nav {
  	float: left;
  	width: 200px;
  	height: 100%;
	}

	#content {
  	height: 100%;
  	overflow: hidden;
	}

	#foot {
 	 height: 100px;
  	width: 100%;
  	bottom: 0px;
  	left: 0px;
  	position: absolute;
	}
上面的示例中，head，foot 高度固定，nav 宽度固定。其他都是自适应的，可以通过调整浏览器窗口的大小看到效果。

## 总结
CSS 布局很简单，如果还有其他的交互动作，可以通过js来实现（比如导航和内容的联动）。
现在已经基本没有人会用 table 的布局方式了，因为 table 本来只展现数据的一种方式，row，cell 的方式也不适合组件化。