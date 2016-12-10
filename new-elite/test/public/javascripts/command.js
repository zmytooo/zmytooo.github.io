//ajax模块
function Ajax(type,url,parm,callback){
	if(type=="GET"){
		var xhr = new XMLHttpRequest();
		xhr.open(type,url);
		xhr.send();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status ===200){
				var data = xhr.responseText;
				callback(data);
			}
		}
	}else{
		var xhr = new XMLHttpRequest();
		xhr.open(type,url);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(parm);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status ===200){
				var data = xhr.responseText;
				callback(data);
			}
		}
	}
}



//首页的点击移动
$('.next1').click(function(){
	$('.tab1').animate({left:"-166px"},1000,function(){
		$('.tab1').append($('.tab1 li').eq(0))
		$('.tab1').css('left','0px')
	})
})
$('.next2').click(function(){
	$('.tab2').animate({left:"-200px"},1000,function(){
		$('.tab2').append($('.tab2 li').eq(0))
		$('.tab2').css('left','0px')
	})
})

//退出请求
$('.tchu').click(function(){
	$.ajax({
		type:"post",
		url:"/login_out",
		success:function (data) {
			location.reload();
		}
	})
})



//内容里登录和注册的交替
var aLi = document.querySelectorAll('.loginbox .top a');
var aBelow = document.querySelectorAll('.loginbox .below');
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onclick=function(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className="";
			aBelow[i].id="";
		}
		aLi[this.index].className="active";
		aBelow[this.index].id="beactive";
	}
}

//输入框里的操作（登陆，注册）
var name1 = document.querySelector('.username');
var password = document.querySelector('.password');
var btn = document.querySelector('.btn');
var btn2 = document.querySelector('.btn2');
var yhm = document.querySelector('.yhm');
var mima = document.querySelector('.mima');

// btn.onclick=function(){
// 	if(!name1.value||!password.value){
// 		alert("请输入用户名或者密码");
// 		return;
// 	}
// 	var data = `username=${name1.value}&password=${password.value}`
// 	console.log(data)
// 	Ajax("POST","/login",data,function(data){
// 		console.log(data)
// 		// var data = JSON.parse(data);
// 		if(data == '1'){
// 			window.location.href="/"
// 		}else{
// 			alert('用户名或者密码错误')
// 			window.location.reload()
// 		}
// 	})
// }

// btn2.onclick=function(){
// 	if(!yhm.value||!mima.value){
// 		alert("请输入用户名或者密码");
// 		return;
// 	}
// 	var data = `username=${yhm.value}&password=${mima.value}`
// 	console.log(data);
// 	Ajax("POST","/reg",data,function(data){
// 		var data=JSON.parse(data);
// 		console.log(data);
// 	})
// }





//个人中心里的操作
// var oDiv1 = document.querySelector('.mine');
// var show = document.querySelector('.show');
// var onOff=true;
// show.onmouseover=function(){
// 	oDiv1.style.display='block';
// }
// document.onclick=function(){
// 	if(onOff){
// 		oDiv1.style.display='none';
// 	}
// }