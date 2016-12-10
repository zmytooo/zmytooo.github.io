var timer=null; var num=0;
var oUl=document.querySelector('.slider .box ul');
var aLi=document.querySelectorAll('.slider ol li');
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onclick=function(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className="";
		}
		aLi[this.index].className="show";
		oUl.style.left=-440*this.index+"px";	
	}
	aLi[i].onmouseover=function(){
		clearInterval(timer);
	}
	aLi[i].onmouseout=function(){
		timer=setInterval(next,3000);
	}
}
function next(){
	num++;
	if(num>aLi.length-1){
		num=0;
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].className="";
	}
	aLi[num].className="show";
	oUl.style.left=-440*num+"px";
}
timer=setInterval(next,3000);



var bDiv=document.querySelectorAll('.life-content .div');
var bP=document.querySelectorAll('.life-content .div p');

for(var i=0;i<bDiv.length;i++){
	bDiv[i].index=i;
	bDiv[i].onmouseover=function(){
		for(var i=0;i<bDiv.length;i++){
			bDiv[i].style.backgroundColor="";
			bP[i].style.color="";
		}
		bDiv[this.index].style.backgroundColor="dodgerblue";
		bP[this.index].style.color="#fff";
	}
	bDiv[i].onmouseout=function(){
		for(var i=0;i<bDiv.length;i++){
			bDiv[i].style.backgroundColor="";
			bP[i].style.color="";
		}
	}
}


var timer2=null;var num2=0;
var bUli=document.querySelectorAll('.like-content ul li');
var bOli=document.querySelectorAll('.like-content ol li');
for(var i=0;i<bOli.length;i++){
	bOli[i].index=i;
	bOli[i].onclick=function(){
		for(var i=0;i<bOli.length;i++){
			bOli[i].className="";
			bUli[i].className="";
		}
		bOli[this.index].className="olactive";
		bUli[this.index].className="picactive";		
	}
	bOli[i].onmouseover=function(){
		clearInterval(timer2);
	}
	bOli[i].onmouseout=function(){
		timer2=setInterval(next2,3000);
	}
}
function next2(){
	num2++;
	if(num2>bOli.length-1){
		num2=0;
	}
	for(var i=0;i<bOli.length;i++){
		bOli[i].className="";
		bUli[i].className="";
	}
	bOli[num2].className="olactive";
	bUli[num2].className="picactive";
}
timer2=setInterval(next2,3000);


var jLi=document.querySelectorAll('.skill-content ul li');
var joLi=document.querySelectorAll('.skill-content ol li');

for(var i=0;i<jLi.length;i++){
	jLi[i].index=i;
	jLi[i].onclick=function(){
		for(var i=0;i<jLi.length;i++){
			jLi[i].className="";
			joLi[i].className="";
		}
		jLi[this.index].className="gai";
		joLi[this.index].className="xian";
	}
}


var nav=document.querySelector("nav");
window.onscroll=function(event){
	var scrolltop=document.body.scrollTop || document.documentElement.scrollTop;
	if(scrolltop>=284){
		nav.style.display='block';
	}else{
		nav.style.display='none';
	}
}













