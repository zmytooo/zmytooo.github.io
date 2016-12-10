	// 滚动图
	var picList = document.getElementById("scrollpic");
	var pic = picList.getElementsByTagName("ul")[0];
	var li = pic.getElementsByTagName("li");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

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