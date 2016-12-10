var oCan=document.querySelector(".container");
	var oUl=document.querySelector(".container ul");
	var newUl=oUl.cloneNode(true);
	oCan.appendChild(newUl);
	var timer=null;var num=0;
	function run(){
		num--;
		if(Math.abs(num)==oCan.offsetWidth/2){
			num=0;
		}
		oCan.style.left=num+"px";
	}
	timer=setInterval(run,10);
	oCan.onmouseover=function(){
		clearInterval(timer);
	}
	oCan.onmouseout=function(){
		timer=setInterval(run,10);	
	}










	