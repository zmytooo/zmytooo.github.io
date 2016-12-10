window.onload=function(){
	var ul=document.getElementById("navul");
	var ulLi = ul.getElementsByTagName("li");
	var ol=document.getElementById("navol");
	var olLi = ol.getElementsByTagName("li");
		for(var i = 0; i < ulLi.length; i++){
			ulLi[i].index = i;
			ulLi[i].onmouseover = function(){
				for(var i = 0; i < ulLi.length; i++){
					ulLi[i].style.display = "block";
					olLi[i].className = "";
				}
				ulLi[this.index].style.display = "block";
				olLi[this.index].className = "active";
		}
		ulLi[i].onmouseout = function(){
			for(var i = 0; i < ulLi.length; i++){
				ulLi[i].style.display = "block";
				olLi[i].className = "";
			}
			ulLi[this.index].style.display = "block";
			olLi[this.index].className = "";
		}
	}


	var img=document.getElementById("tabimg");
	var imgImg=img.getElementsByTagName('img');
	var leftClick=document.getElementById('left');
	var rightClick=document.getElementById('right');
	var k=0;

	timer=setInterval(next,4000);


	function next(){
		++k;
		if(k>2){
			k=0;
			img.style.marginLeft=0;
		}else{
			img.style.marginLeft=-1922*k+'px';
			}
	}
	rightClick.onmouseover=function(){
		clearInterval(timer);
	}
	leftClick.onmouseover=function(){
		clearInterval(timer);
	}
	rightClick.onmouseout=function(){
		timer=setInterval(next,4000);
	}
	leftClick.onmouseout=function(){
		timer=setInterval(next,4000);
	}
	rightClick.onclick=function(){
		++k;
		if(k>2){
			k=0;
			img.style.marginLeft=0;
		}else{
			img.style.marginLeft=-1922*k+'px';
			}
		}
	
	leftClick.onclick=function(){
	--k;
	console.log(k);
	if(k<0){
		img.style.marginLeft=-1922*2+'px';
		k=2;
	}else{
		img.style.marginLeft=-1922*k+'px';
	}
}
}