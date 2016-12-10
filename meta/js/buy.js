var aLi=document.querySelectorAll(".buytop ul li");
var oImg=document.querySelector(".smallpic img");
var small=document.querySelector(".smallpic");
var mask=document.querySelector(".buytop .smallpic span");
var show=document.querySelector("#show");
var bigPic=document.querySelector(".bigpic");
var bigImg=document.querySelector(".bigpic img");
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className="";
		}
		aLi[this.index].className="have";
		oImg.src='../img/buybag'+(this.index+1)+'.png';
		bigImg.src='../img/buybag'+(this.index+1)+'.png';
	}
}
small.onmouseover=function(){
	mask.style.display='block';
	bigPic.style.display='block';
}
small.onmouseout=function(){
	mask.style.display='none';
	bigPic.style.display='none';
}
show.onmousemove=function(event){
	var oEvent=event || window.event;
	var x=oEvent.offsetX;
	var y=oEvent.offsetY;
	var le=x-mask.offsetWidth/2;
	var to=y-mask.offsetHeight/2;
	if(le<=0){
		le=0;
	}else if(show.offsetWidth-x<=mask.offsetWidth/2){
		le=show.offsetWidth-mask.offsetWidth;
	}
	if(to<=0){
		to=0;
	}else if(show.offsetHeight-y<=mask.offsetHeight/2){
		to=show.offsetHeight-mask.offsetHeight;
	}
	mask.style.left=le+"px";
	mask.style.top=to+"px";
	var xishuX=le/(show.offsetWidth-mask.offsetWidth);
	var xishuY=to/(show.offsetHeight-mask.offsetHeight);
	bigImg.style.left=-xishuX*(bigImg.offsetWidth-bigPic.offsetWidth)+"px";
	bigImg.style.top=-xishuY*(bigImg.offsetHeight-bigPic.offsetHeight)+"px";
}




