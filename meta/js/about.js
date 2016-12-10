var nav=document.querySelector(".gus");
window.onscroll=function(event){
	var scrolltop=document.body.scrollTop || document.documentElement.scrollTop;
	if(scrolltop>=275){
		nav.id='fixed';
	}else{
		nav.id='';
	}
}




















