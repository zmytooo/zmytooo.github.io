var myzh=document.querySelector(".myzh");
var mydd=document.querySelector(".mydd");
var mydz=document.querySelector(".mydz");
var myac=document.querySelector(".myac");
var order=document.querySelector(".order");
var address=document.querySelector(".address");
myzh.onclick=function(){
	myac.id="show";
	order.id="";
	address.id="";
}
mydd.onclick=function(){
	order.id="show";
	myac.id="";
	address.id="";
}
mydz.onclick=function(){
	address.id="show";
	order.id="";
	myac.id="";
}












