---
title: css清除浮动
date: 2016-03-26 17:34:22
tags:
---
# 四种基本的CSS清除浮动的方法
四种基本的CSS清除浮动的方法
我们平时在写CSS样式时会经常用到浮动这个方法，浮动可以帮助我们解决很多的布局问题，但是提示也给我们带来了一些别的问题。比如，背景不能显示啊，高度不对，margin设置的不对等等问题。那么，我们就要解决浮动所带来的问题了。

## 方法一：给父级元素手动加高度
这种方法是清楚浮动里面比较low的，一般用的比较少。

## 方法二：给父级设置overflow：auto
下面放一段代码来说明一下：

	.box{
    	overflow: auto; zoom: 1; //zoom: 1; 是在处理兼容性问题
	}

	<div class="box">
    	<div class="div1">1</div>
    	<div class="div2">2</div>
	</div>

## 方法三：添加个新的元素，用clear：both来解决问题
下面放一段代码来说明一下：

	.clear{clear:both; height: 0; line-height: 0; font-size: 0}

	<div class="box">
    	<div class="div1">1</div>
    	<div class="div2">2</div>
    	<div class="clear"></div>
	</div>

## 方法四：浮动元素的父级设置：after方法
这种方法清除浮动是现在网上最拉风的一种清除浮动，他就是利用:after和:before来在元素内部插入两个元素块，从面达到清除浮动的效果。其实现原理类似于clear:both方法，只是区别在于:clear在html插入一个div.clear标签，而outer利用其伪类clear:after在元素内部增加一个类似于div.clear的效果。下面来看看其具体的使用方法：

	.outer {zoom:1;}    /*==for IE6/7 Maxthon2==*/
	.outer :after {     /*==for FF/chrome/opera/IE8==*/
    	clear:both;
    	content:'.';
    	display:block;
    	width: 0;
    	height: 0;
    	visibility:hidden;
	}   

	<div class="outer">
    	<div class="div1">1</div>
    	<div class="div2">2</div>
	</div>