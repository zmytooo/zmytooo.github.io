function slider(para){
	this.para=para;
	this.init=function(){
		this.content();
		if(this.para.type=="opacity"){
			this.opacity();
		}
	}
	this.content=function(){
		var wrap=document.querySelector(this.para.wrap);
		var content="<ul>";
		var btn="<ol>";
		if(this.para.count>1){
			for(var i=0;i<this.para.count;i++){
				content+="<li>"+"<img src='../img/big"+(i+1)+".png'>"+"</li>";
				btn+="<li></li>";
			}
			content+="</ul>";
			btn+="</ol>";
			wrap.innerHTML=content+btn;
		}else{
			content+="<li>"+"<img src='../img/big1.png'>"+"</li>";
			content+="</ul>";
			btn+="</ol>";
			wrap.innerHTML=content+btn;
		}
	}
	this.opacity=function(){
		var btn=document.querySelector(".slider ol");
		var btnList=document.querySelectorAll(".slider ol li");
		var content=document.querySelector(".slider ul");
		var contentList=document.querySelectorAll(".slider ul li");
		var length=this.para.count;
		var timer=null;
		var num=0;
		contentList[0].style.opacity='1';
		btnList[0].style.background='red';
		for(var i=0;i<length;i++){
			btnList[i].index=i;
			btnList[i].onclick=function(){
				for(var i=0;i<length;i++){
					contentList[i].style.opacity='0';
					btnList[i].style.background="#ffffff";
				}
				contentList[this.index].style.opacity='1';
				btnList[this.index].style.background='red';
			}
			btnList[i].onmouseover=function(){
				clearInterval(timer);
			}	
			btnList[i].onmouseout=function(){
				timer=setInterval(run,3500);
			}
		}			
		function run(){
			num++;
			if(num>=length){
				num=0;
			}
			for(var i=0;i<length;i++){
				contentList[i].style.opacity='0';
				btnList[i].style.background='#ffffff';
			}
			contentList[num].style.opacity='1';
			btnList[num].style.background='red';
		}
		timer=setInterval(run,3500);			
	}
}
var tab = new slider({
	wrap:".slider",
	count:3,
	type:"opacity"
});
tab.init();

var pic1=document.querySelector(".bagbox .pic1");
var pic2=document.querySelector(".bagbox .pic2");
var pic3=document.querySelector(".bagbox .pic3");
var pic4=document.querySelector(".bagbox .pic4");
var pic5=document.querySelector(".bagbox .pic5");
var pic6=document.querySelector(".bagbox .pic6");
var pic7=document.querySelector(".bagbox .pic7");
var pic8=document.querySelector(".bagbox .pic8");
var pic9=document.querySelector(".bagbox .pic9");
var pic10=document.querySelector(".bagbox .pic10");
var pic11=document.querySelector(".bagbox .pic11");
pic1.onmouseover=function(){
	pic1.src="../img/bbag1.png";
}
pic1.onmouseout=function(){
	pic1.src="../img/bag1.png";
}
pic2.onmouseover=function(){
	pic2.src="../img/bbag2.png";
}
pic2.onmouseout=function(){
	pic2.src="../img/bag2.png";
}
pic3.onmouseover=function(){
	pic3.src="../img/bbag3.png";
}
pic3.onmouseout=function(){
	pic3.src="../img/bag3.png";
}
pic4.onmouseover=function(){
	pic4.src="../img/bbag4.png";
}
pic4.onmouseout=function(){
	pic4.src="../img/bag4.png";
}
pic5.onmouseover=function(){
	pic5.src="../img/bbag5.png";
}
pic5.onmouseout=function(){
	pic5.src="../img/bag5.png";
}
pic6.onmouseover=function(){
	pic6.src="../img/bbag6.png";
}
pic6.onmouseout=function(){
	pic6.src="../img/bag6.png";
}
pic7.onmouseover=function(){
	pic7.src="../img/bbag7.png";
}
pic7.onmouseout=function(){
	pic7.src="../img/bag7.png";
}
pic8.onmouseover=function(){
	pic8.src="../img/bbag8.png";
}
pic8.onmouseout=function(){
	pic8.src="../img/bag8.png";
}
pic9.onmouseover=function(){
	pic9.src="../img/bbag9.png";
}
pic9.onmouseout=function(){
	pic9.src="../img/bag9.png";
}
pic10.onmouseover=function(){
	pic10.src="../img/bbag10.png";
}
pic10.onmouseout=function(){
	pic10.src="../img/bag10.png";
}
pic11.onmouseover=function(){
	pic11.src="../img/bbag11.png";
}
pic11.onmouseout=function(){
	pic11.src="../img/bag11.png";
}