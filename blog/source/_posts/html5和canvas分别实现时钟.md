---
title: html5和canvas分别实现时钟
date: 2016-08-25 22:11:47
tags: [canvas,js,html]
---
最近学习了canvas，试着用canvas做了个简单的时钟。整理了一下以前用HTML做的时钟，下面放上两种实现时钟的方法，大家可以比较一下。

## HTML实现时钟

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>钟表</title>
	</head>
	<style type="text/css">
	ul{
        margin: 0;
        list-style: none;
	}
	.huan1{
        width: 600px;
        height: 600px;
        border-radius: 20%;
        background: #d0f6e5;
        padding: 50px;
        box-sizing: border-box;
        margin: 100px auto;
	}
	.huan2{
        width: 500px;
        height: 500px;
        border-radius: 50%;
        box-sizing: border-box;
        padding: 30px;
        background:  -webkit-linear-gradient(#62bd97,#fff);
	}
	.huan3{
        width: 440px;
        height: 440px;
        border-radius: 50%;
        position: relative;
        box-sizing: border-box;
        background: -webkit-radial-gradient(#51d1c4 5%,#2a7770 95%);
        padding: 150px; 
	}
	.huan4{
        width: 140px;
        height: 140px;
        border-radius: 50%;
        box-sizing: border-box;
        background: -webkit-linear-gradient(#f0fbf9,#94eedf);
        padding: 40px;
	}
	.kedu{
        width: 440px;
        height: 20px;
        position: absolute;
        top: 210px;
        left: 0px;
        transform-origin: 220px 10px;
	}
	.kedu:nth-child(1){
        transform: rotate(90deg);
	}
	.kedu:nth-child(2){
        transform: rotate(60deg);
	}
	.kedu:nth-child(3){
        transform: rotate(30deg);
	}
	.kedu:nth-child(4){
        transform: rotate(0deg);
	}
	.kedu:nth-child(5){
        transform: rotate(-30deg);
	}
	.kedu:nth-child(6){
        transform: rotate(-60deg);
	}
	.right{
    float: right;
        margin-top: -40px;
	}
	p{
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-top: 0;
        font-size: 20px;
        padding: 0 10px;
	}
	.huan5{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        background: -webkit-linear-gradient(#fff 20%,#a5ded4);
	}
	.hours{
        width: 20px;
        height: 100px;
        background: #055248; 
        position: absolute;
        left: 20px;
        top: -60px;
        transform-origin: 10px 90px;
	}
	.minutes{
        width: 14px;
        height: 130px;
        position: absolute;
        top: -90px;
        left: 23px;
        background: #044f46;
        transform-origin: 7px 120px;
	}
	.seconds{
        width: 10px;
        height: 180px;
        position: absolute;
        left: 25px;
        top: -140px;
        background: #fe6f6f;
        transform-origin: 5px 170px;
	}

	</style>
	<body>
	<div class="huan1">
    <div class="huan2">
        <div class="huan3">
            <div class="kedu"><p style="transform:rotate(-90deg);">12</p><p class="right" style="transform:rotate(-90deg);">6</p></div>
            <div class="kedu"><p style="transform:rotate(-60deg);">11</p><p class="right" style="transform:rotate(-60deg);">5</p></div>
            <div class="kedu"><p style="transform:rotate(-30deg);">10</p><p class="right" style="transform:rotate(-30deg);">4</p></div>
            <div class="kedu"><p>9</p><p class="right" style="transform:rotate(0deg);">3</p></div>
            <div class="kedu"><p style="transform:rotate(30deg);">8</p><p class="right" style="transform:rotate(30deg);">2</p></div>
            <div class="kedu"><p style="transform:rotate(60deg);">7</p><p class="right" style="transform:rotate(60deg);">1</p></div> 
            <div class="huan4">
                <div class="huan5">
                    <div class="hours"></div>
                    <div class="minutes"></div>
                    <div class="seconds"></div>
                </div>
            </div>
        </div>
    </div>
	</div>

	<script>

    var hours = document.querySelector(".hours");
    var minutes = document.querySelector(".minutes");
    var seconds = document.querySelector(".seconds");
    setInterval(fn,1000);
    function fn(){
        var watch = new Date();
        var hour = watch.getHours();
        var minute = watch.getMinutes();
        var second = watch.getSeconds();
        hours.style.transform = "rotate("+hour*30+"deg)";
        minutes.style.transform = "rotate("+minute*6+"deg)";
        seconds.style.transform = "rotate("+second*6+"deg)";
    }   
	</script>
	</body>
	</html>
实现的效果如下图：

![Alt text](http://a1.qpic.cn/psb?/V101Z8453moGbb/kgtSQ6GufupaPnxHz1KvasOpcqygRnKjEzQva8civwA!/b/dHcBAAAAAAAA&bo=qQKAAgAAAAADBws!&rf=viewer_4)
## canvas实现时钟

	<!doctype html>  
	<html>  
	<head>
	<meta charset="utf-8">
	<title>canvas时钟</title>
	</head>  
	<body>  
	<canvas id="clock">  
	您的浏览器不支持canvas标签
	</canvas>  
	<script>  
	var clock=document.getElementById('clock');  
	var cxt=clock.getContext('2d');  
	clock.width=500;
	clock.height=500;
	function drawClock(){     
    cxt.clearRect(0,0,500,500); //清除画布 
    var now =new Date();  
    var sec=now.getSeconds();  
    var min=now.getMinutes();  
    var hour=now.getHours();              

    hour=hour+min/60;   //小时必须获取浮点类型(小时+分数转化成的小时)  

    cxt.lineWidth=10;  
    cxt.strokeStyle="dodgerblue";  //绘制表盘 
    cxt.beginPath();  
    cxt.arc(250,250,200,0,Math.PI*360,false);  
    cxt.closePath();  
    cxt.stroke();  

    //刻度  
    for(var i=0;i<60;i++){  
        cxt.save();               
        cxt.lineWidth=5;                  
        cxt.strokeStyle="#000";                
        cxt.translate(250,250);           
        cxt.rotate(i*6*Math.PI/180);                  
        cxt.beginPath();  
        cxt.moveTo(0,-180);  
        cxt.lineTo(0,-190);  
        cxt.closePath();  
        cxt.stroke();  
        cxt.restore();  
    }  

    //时针  
        cxt.save();           
        cxt.lineWidth=7;                  
        cxt.strokeStyle="pink";                
        cxt.translate(250,250); 
        cxt.rotate(hour*30*Math.PI/180);  
        cxt.beginPath();  
        cxt.moveTo(0,-120);     //针长  
        cxt.lineTo(0,10);  
        cxt.closePath();  
        cxt.stroke();  
        cxt.restore();  


    //分针  
        cxt.save();  
        cxt.lineWidth=5;  
        cxt.strokeStyle="#000";  
        cxt.translate(250,250);  
        cxt.rotate(min*6*Math.PI/180);  
        cxt.beginPath();  
        cxt.moveTo(0,-150);  
        cxt.lineTo(0,15);  
        cxt.closePath();  
        cxt.stroke();  
        cxt.restore();  


    //秒针              
        cxt.save();  
        cxt.strokeStyle="red";  
        cxt.lineWidth=3;  
        cxt.translate(250,250);               
        cxt.rotate(sec*6*Math.PI/180);//设置旋转角度                
        cxt.beginPath();    //画图  
        cxt.moveTo(0,-170);  
        cxt.lineTo(0,20);  
        cxt.closePath();  
        cxt.stroke();                 
        cxt.beginPath();    //画出时针、分针、秒针的交叉点、  
        cxt.arc(0,0,5,0,360,false);  
        cxt.closePath();                  
        cxt.fillStyle="gray";   //交汇处的填充样式  
        cxt.fill();               
        cxt.stroke();  

        //设置秒针前段的小圆点  
        cxt.beginPath();  
        cxt.arc(0,-150,5,0,360,false);  
        cxt.closePath();  
        cxt.fillStyle="#FFF";  
        cxt.fill();               
        cxt.stroke();//设置笔触样式(秒针已设置)                  
        cxt.restore();  
    }  


	drawClock();    
	//使用setInterval  让时钟动起来  
	setInterval(drawClock,1000);  
	</script>  
	</body>  
	</html>  
效果图如下：

![Alt text](http://a2.qpic.cn/psb?/V101Z8453moGbb/7Vd3ZhjV.SunKTXOAxZYBDtO0lC9Sze.djcNcl5MOCg!/b/dAwBAAAAAAAA&bo=AALpAQAAAAADB8g!&rf=viewer_4)

这两种实现时钟的方法不太一样，看大家比较习惯哪种了（有错误欢迎指出）

