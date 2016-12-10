var aOl=document.querySelectorAll('.sliderbox ol li');
var slider=document.querySelector('.sliderbox ul');
var num=0;
var timer=null;
for(var i=0;i<aOl.length;i++){
	aOl[i].index=i;
	aOl[i].onmouseover=function(){
		for(var i=0;i<aOl.length;i++){
			aOl[i].className="";	
		}
		aOl[this.index].className="olactive";
		slider.style.left = -1232*this.index+"px";
	}
}

function next(){
	num++;
	if(num>aOl.length-1){
		num=0;
	}
	for(var i=0;i<aOl.length;i++){
		aOl[i].className="";
	}
	aOl[num].className="olactive";
	slider.style.left= -1232*num+"px";
}

timer=setInterval(next,5000);

slider.onmouseover=function(){
	clearInterval(timer);
}
slider.onmouseout=function(){
	timer=setInterval(next,5000);
}
