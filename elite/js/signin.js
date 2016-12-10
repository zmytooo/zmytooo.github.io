var btn=document.querySelector(".btn");
var yanz=document.querySelector(".yanz");
var username=document.querySelector(".inp1");
var password=document.querySelector(".inp2");
var remember=document.querySelector("#jizhu");
btn.onclick=function(){
	if(username.value&&password.value){
		AJax("GET","http://10.80.16.101/精英吧/signin.php?username="+username.value+"&password="+password.value+"&remember="+remember.checked,"",function(data){
			var data =JSON.parse(data);
			if(data.msg){
				location.href="http://10.80.16.101/精英吧/html/main.html"
			}else{
				console.log("您输入的账号有误！");
			}
		});
	}else{
		AJax("GET","http://10.80.16.101/精英吧/signin.php?username="+username.value+"&password="+password.value,"",function(data){
			console.log(data);
		});
	}

// var list=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"];

// function random(){
// 	var a=Math.max(m,n)-Math.min(m,n);
// 	return Math.ceil(Math.random()*a+Math.min(m,n));
// }

// console.log(yanz);
// yanz.style.value=list[5];







