var pic=document.querySelectorAll(".signle a img");
var btn=document.querySelectorAll(".signle ol li");
var timer=null;
var num=0;
for(var i=0;i<btn.length;i++){
	btn[i].index=i;
	btn[i].onmouseover=function(){
		clearInterval(timer);
		for(var i=0;i<btn.length;i++){
			btn[i].className="";
			pic[i].className="";
		}
		btn[this.index].className="active";
		pic[this.index].className="banner";
	}
	btn[i].onmouseout=function(){
		timer=setInterval(next,3000);
	}
}
function next(){
	num++;
	if(num>btn.length-1){
		num=0;
	}
	for(var i=0;i<btn.length;i++){
		btn[i].className="";
		pic[i].className="";
	}
	btn[num].className="active";
	pic[num].className="banner";
}
timer=setInterval(next,3000);

var mask=document.querySelectorAll(".mask");
var show=document.querySelectorAll(".show");
for(var j=0;j<show.length;j++){
	show[j].index=j;
	show[j].onmouseover=function(){
		mask[this.index].className="show";
	}
	show[j].onmouseout=function(){
		mask[this.index].className="";
	}
}
//输入信息成功后跳转
var text=document.querySelector(".user");
if(document.cookie){
		var arr = document.cookie.split("=");
		var username=arr[1];
		if(arr[0]){
			text.innerHTML=username;
		}
}


