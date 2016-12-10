// $(".nav ul li").eq(1).mouseover(function() {
//     $(this).find("img").attr('src','../img/movie2.png');   
//   }).mouseout(function(){
//     $(this).find("img").attr('src','../img/movie.png');   
// });

$(".nav ul li").eq(2).mouseover(function() {
    $(this).find("img").attr('src','../img/tv2.png');   
  }).mouseout(function(){
    $(this).find("img").attr('src','../img/tv.png');   
});

$(".nav ul li").eq(3).mouseover(function() {
    $(this).find("img").attr('src','../img/show2.png');   
  }).mouseout(function(){
    $(this).find("img").attr('src','../img/show.png');   
});

$(".nav ul li").eq(4).mouseover(function() {
    $(this).find("img").attr('src','../img/cartoon2.png');   
  }).mouseout(function(){
    $(this).find("img").attr('src','../img/cartoon.png');   
});

$(".nav ul li").eq(5).mouseover(function() {
    $(this).find("img").attr('src','../img/all2.png');   
  }).mouseout(function(){
    $(this).find("img").attr('src','../img/all.png');   
});


var li1 = document.querySelector('.nav ul li:nth-child(2)');
var pic1 = document.querySelector('.nav ul li:nth-child(2) img');
li1.onmouseover=function(){pic1.src="../img/movie2.png";}
li1.onmouseout=function(){pic1.src="../img/movie.png";}










