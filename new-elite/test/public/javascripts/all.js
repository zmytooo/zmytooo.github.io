// var aTab = document.querySelectorAll('section .aside li a');
// // var aShow = document.querySelectorAll('section .list .below li');
// for(var i=0;i<aTab.length;i++){
// 	aTab[i].index=i;
// 	aTab[i].onclick=function(){
// 		for(var i=0;i<aTab.length;i++){
// 			aTab[i].className="";
// 			// aShow[i].className="";
// 		}
// 		aTab[this.index].className="active";
// 		// aShow[this.index].className="active";
// 	}
// }




$(function(){
	var url = location.search.slice(1).split("&");
	var type = url[0].slice(5);
	var mz= url[1].slice(5);
	
	var str="type="+type+"&name="+mz;

	$('.aside li a').click(function(){
		var target= $(this).attr("target");
		location.href='/all?type='+type+'&name='+target+'#course';
		return false;
	})
	$('.list li a').click(function(){
		var target= $(this).attr("target");
		location.href='/all?type='+target+'&name='+mz+'#course';
		return false;
	})
	$.ajax({
		type:"get",
		url:"/port1?"+str,
		success:function(data){
			var data=data.data;
			var allHtml="<li>";
			console.log(data);
			//添加数据
			for(var i=0;i<data.length;i++){
				if(type=="zhibo"){
					allHtml+=`<a href='#' class='clear'><img src="${data[i].img}"/><div class='info'><h2>${data[i].biaoti}</h2><small>${data[i].jigou}</small><small class='sml'>${data[i].date}</small></br><i>剩余名额：${data[i].minge}</i><p>${data[i].jies}</p></div><div class='money'><em>${data[i].yuanjia}</em><i>${data[i].xianjia}</i></div></a>`;
				}else if(type=="dian"){
					if(data[i].yuanjia){
						allHtml+=`<a href='#' class='clear'><img src="${data[i].img}"/><div class='info'><h2>${data[i].biaoti}</h2><small>${data[i].jigou}</small><small class='sml'>${data[i].keshi}</small><p>${data[i].jies}</p></div><div class='money'><em>${data[i].yuanjia}</em><i>${data[i].xianjia}</i></div></a>`;
					}else{
						allHtml+=`<a href='#' class='clear'><img src="${data[i].img}"/><div class='info'><h2>${data[i].biaoti}</h2><small>${data[i].jigou}</small><small class='sml'>${data[i].keshi}</small><p>${data[i].jies}</p></div><div class='money'><i>${data[i].xianjia}</i></div></a>`;
					}
				}else{
					if(!data[i].minge&&!data[i].yuanjia){
						allHtml+=`<a href='#' class='clear'><img src="${data[i].img}"/><div class='info'><h2>${data[i].biaoti}</h2><small>${data[i].jigou}</small><small class='sml'>${data[i].keshi}</small><p>${data[i].jies}</p></div><div class='money'><i>${data[i].xianjia}</i></div></a>`;
					}else if(!data[i].minge&&data[i].yuanjia){
						allHtml+=`<a href='#' class='clear'><img src="${data[i].img}"/><div class='info'><h2>${data[i].biaoti}</h2><small>${data[i].jigou}</small><small class='sml'>${data[i].keshi}</small><p>${data[i].jies}</p></div><div class='money'><em>${data[i].yuanjia}</em><i>${data[i].xianjia}</i></div></a>`;
					}else{
						allHtml+=`<a href='#' class='clear'><img src="${data[i].img}"/><div class='info'><h2>${data[i].biaoti}</h2><small>${data[i].jigou}</small><small class='sml'>${data[i].date}</small></br><i>剩余名额：${data[i].minge}</i><p>${data[i].jies}</p></div><div class='money'><em>${data[i].yuanjia}</em><i>${data[i].xianjia}</i></div></a>`;
					}
				}
			}
			allHtml+="</li>";
			$('.below').html(allHtml);
		}
	})

	if(type=="all"){
		$('.top li').eq(0).children('a').addClass('active')
	}
	if(type=="zhibo"){
		$('.top li').eq(1).children('a').addClass('active')
		$('.azb').css('color','#f46c03')
		$('.longk').css({display:'block',left:'259px'})
	}
	if(type=="dian"){
		$('.top li').eq(2).children('a').addClass('active')
		$('.adb').css('color','#f46c03')
		$('.longk').css({display:'block',left:'369px'})
	}
	if(mz=="all"){
		$('.aside li').eq(0).children('a').addClass('active')
		$('')
	}
	if(mz=="ios"){
		$('.aside li').eq(1).children('a').addClass('active')
	}
	if(mz=="html5"){
		$('.aside li').eq(2).children('a').addClass('active')
	}
	if(mz=="unity"){
		$('.aside li').eq(3).children('a').addClass('active')
	}
	if(mz=="react"){
		$('.aside li').eq(4).children('a').addClass('active')
	}











































})






