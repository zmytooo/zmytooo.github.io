window.onload = function(){
	// 滚动图
	var picList = document.querySelector("#scrollpic");
	var pic = picList.getElementsByTagName("ul")[0];
	var li = pic.getElementsByTagName("li");
	var prev = document.querySelector("#prev");
	var next = document.querySelector("#next");

	pic.innerHTML = pic.innerHTML + pic.innerHTML;
	pic.style.width = li[0].offsetWidth * li.length + "px";
	pic.style.left = -pic.offsetWidth/2;
	var speed = 1;
	//控制滚动
	function movePic(){
		if(pic.offsetLeft <= -pic.offsetWidth/2){
			pic.style.left = 0;
		}
		if(pic.offsetLeft>0){
			pic.style.left = -(pic.offsetWidth/2)+"px";
		}
		pic.style.left = pic.offsetLeft + speed +"px";
	}
	var timer = setInterval(movePic,10);
	// 鼠标操作 暂停/滚动
	pic.onmouseover = function(){
		clearInterval(timer);
	}
	pic.onmouseout = function(){
		timer = setInterval(movePic,10);
	}
	//控制图片左右滚动
	prev.onmouseover=function(){
		speed=1;
	}
	next.onmouseover=function(){
		speed=-1;
	}

	// 导航
	var ulLi = document.querySelectorAll(".nav ul li");
	var olLi = document.querySelectorAll(".nav ol li");
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
}




























