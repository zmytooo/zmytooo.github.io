// $(".nav ul li").eq(1).mouseover(function() {
//     $(this).find("img").attr('src','../img/hmovie.png');   
//   }).mouseout(function(){
//     $(this).find("img").attr('src','../img/movie.png');   
// });

// $(".nav ul li").eq(2).mouseover(function() {
//     $(this).find("img").attr('src','../img/htv.png');   
//   }).mouseout(function(){
//     $(this).find("img").attr('src','../img/tv.png');   
// });

// $(".nav ul li").eq(3).mouseover(function() {
//     $(this).find("img").attr('src','../img/hshow.png');   
//   }).mouseout(function(){
//     $(this).find("img").attr('src','../img/show.png');   
// });

// $(".nav ul li").eq(4).mouseover(function() {
//     $(this).find("img").attr('src','../img/hcartoon.png');   
//   }).mouseout(function(){
//     $(this).find("img").attr('src','../img/cartoon.png');   
// });

// $(".nav ul li").eq(5).mouseover(function() {
//     $(this).find("img").attr('src','../img/hall.png');   
//   }).mouseout(function(){
//     $(this).find("img").attr('src','../img/all.png');   
// });

var li1 = document.querySelector('.nav ul li:nth-child(2)');
var pic1 = document.querySelector('.nav ul li:nth-child(2) img');
li1.onmouseover=function(){pic1.src="../img/hmovie.png";}
li1.onmouseout=function(){pic1.src="../img/movie.png";}

var li2 = document.querySelector('.nav ul li:nth-child(3)');
var pic2 = document.querySelector('.nav ul li:nth-child(3) img');
li2.onmouseover=function(){pic2.src="../img/htv.png";}
li2.onmouseout=function(){pic2.src="../img/tv.png";}

var li3 = document.querySelector('.nav ul li:nth-child(4)');
var pic3 = document.querySelector('.nav ul li:nth-child(4) img');
li3.onmouseover=function(){pic3.src="../img/hshow.png";}
li3.onmouseout=function(){pic3.src="../img/show.png";}

var li4 = document.querySelector('.nav ul li:nth-child(5)');
var pic4 = document.querySelector('.nav ul li:nth-child(5) img');
li4.onmouseover=function(){pic4.src="../img/hcartoon.png";}
li4.onmouseout=function(){pic4.src="../img/cartoon.png";}

var li5 = document.querySelector('.nav ul li:nth-child(6)');
var pic5 = document.querySelector('.nav ul li:nth-child(6) img');
li5.onmouseover=function(){pic5.src="../img/hall.png";}
li5.onmouseout=function(){pic5.src="../img/all.png";}











