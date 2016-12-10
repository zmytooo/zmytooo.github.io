// 幻灯部分
var aLi=document.querySelectorAll('.slider ul li');
var aBtn=document.querySelectorAll('.slider ol li');
var num=0;var timer=null;

for(var i=0;i<aBtn.length;i++){
	aBtn[i].index=i;
	aBtn[i].onclick=function(){
		for(var i=0;i<aBtn.length;i++){
			aLi[i].className="";
			aBtn[i].className="";
		}
		aLi[this.index].className="active";
		aBtn[this.index].className="active";
	}
	aBtn[i].onmouseover=function(){
		clearInterval(timer);
	}	
	aBtn[i].onmouseout=function(){
		timer=setInterval(next,3000);		
	}		
}

function next(){
	num++;
	if(num>aBtn.length-1){
		num=0;
	}
	for(var i=0;i<aBtn.length;i++){
		aLi[i].className="";
		aBtn[i].className="";
	}
	aLi[num].className="active";
	aBtn[num].className="active";
}
timer=setInterval(next,3000);