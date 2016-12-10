var oUl = document.querySelector('.show ul');
var html="";
for(var i=0;i<36;i++){
	html+="<li><a href='#'><img src='../img/banner5.jpg'/><div><p>名字</p><small>主演</small></div></a></li>";
}
oUl.innerHTML+=html;