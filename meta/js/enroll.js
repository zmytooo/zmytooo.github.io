var signup=document.querySelector(".signup");
var signin=document.querySelector(".signin");
var span1=document.querySelector(".enroll .span1");
var span2=document.querySelector(".enroll2 .span1");
var span3=document.querySelector(".enroll3 .span1");
var enrollone=document.querySelector(".enrollone");
var enrolltwo=document.querySelector(".enrolltwo");
var enrollthree=document.querySelector(".enrollthree");
var ever=document.querySelector(".ever");
var create=document.querySelector(".create");
signup.onclick=function(){
	enrollone.style.display="block";
}
signin.onclick=function(){
	enrollthree.style.display="block";
}
create.onclick=function(){
	enrolltwo.style.display="block";
	enrollone.style.display="none";
}
span1.onclick=function(){
	enrollone.style.display="none";
}
span2.onclick=function(){
	enrolltwo.style.display="none";
}
span3.onclick=function(){
	enrollthree.style.display="none";
}
ever.onclick=function(){
	enrollone.style.display="none";
	enrollthree.style.display="block";
}