/**
 * Created by lanou on 16/10/9.
 */
var float=document.querySelector(".float");
window.onscroll=function(){
    var _scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
    if (_scrollTop>288){
        float.style.position='fixed';
        float.style.top='0';
        float.style.left='50%';
        float.style.marginLeft = -270+'px';
    }else{
        float.style.position='';
        float.style.marginLeft = '';
    }
}
