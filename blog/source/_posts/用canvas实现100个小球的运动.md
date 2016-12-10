---
title: 用canvas实现100个小球的运动
date: 2016-08-14 19:29:46
tags:
---
最近在学习canvas的有关内容，用canvas和构造函数做了个100个随机大小随机颜色的小例子。

下面是代码部分，主要包括了构造函数，绘制100个不同的小球和形成小球的运动。代码中有具体的注释。

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>动画</title>
	<style type="text/css">
    #canvas{
        display: block;
        margin: 50px auto;
        background: #000;
    }
	</style>
	</head>
	<body>
	<canvas width="800" height="600" id="canvas">
    您的浏览器版本过低！
	</canvas>
	</body>
	<script type="text/javascript">
	var canvas=document.querySelector("#canvas");
	var ctx=canvas.getContext("2d");

	function fn(){
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color;
        this.speedX=speedX;
        this.speedY=speedY;
	}

	//绘制小球
	fn.prototype.drawArc=function(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
	}

	//小球的运动
	fn.prototype.move=function(){
        if(this.x+this.speedX+this.r>canvas.width||this.x+this.speedX-this.r<0){
            this.speedX=-this.speedX;
        }
        if(this.y+this.speedY+this.r>canvas.height||this.y+this.speedY-this.r<0){
            this.speedY=-this.speedY;
        }
        this.x+=this.speedX;
        this.y+=this.speedY;
	}

	//形成100个小球
	var arr=[];
	for(var i=0;i<100;i++){
        var x=random(30,770);
        var y=random(30,570);
        var r=random(5,30);
        var speedX=random(1,5);
        var speedY=random(1,5);
        var color = "rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")";
        var obj = new fn(x,y,r,color,speedX,speedY);
        arr.push(obj);
	}

	//整体运动
	var timer=null;
	function ani(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(var i=0;i<arr.length;i++){
            arr[i].drawArc();
            arr[i].move();
        }
        timer=window.requestAnimationFrame(ani);
	}
	ani();

	//点击暂停
	var onOff=false;
	document.onclick=function(){
        onOff=!onOff;
        if(onOff){
            window.cancelAnimationFrame(timer);
        }else{
            ani();
        }
	}

	//随机数
	function random(m,n){
        var num=Math.max(m,n)-Math.min(m,n);
        return Math.ceil(Math.random()*num+Math.min(m,n));
	}
	</script>
	</html>
出来的效果如下（附一张静态图片）：

![Alt text](http://a3.qpic.cn/psb?/V101Z8453moGbb/QZhheTr.mZfO9mC3LDgQZSBz.5BEdk2rz0PSZOrmAV8!/m/dAoBAAAAAAAAnull&bo=ZAOAAgAAAAADB8c!&rf=photolist&t=5)

