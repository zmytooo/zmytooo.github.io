/**
 * Created by lanou on 16/10/9.
 */

//放大镜
var aLi = document.querySelectorAll(".pic_show .big li");
var oLi = document.querySelectorAll(".pic_show ol li");
var vLi = document.querySelectorAll(".pic_show .view_box li");
var box = document.querySelector(".pic_show");
var view_box = document.querySelector(".view_box");
var _box = document.querySelector(".view");
var big = document.querySelector(".big");
var control = document.querySelector(".control");
var length = oLi.length
for (var i=0; i<length; i++){
    oLi[i].index = i;
    oLi[i].onclick=function(){
        for (var j=0 ;j<length;j++){
            oLi[j].style.borderColor='white';
            aLi[j].className='';
            vLi[j].className='';
        }
        this.style.borderColor='grey';
        aLi[this.index].className='active';
        vLi[this.index].className='active';
    }
}
big.onmouseover = function() {
    control.style.display = 'block';
    _box.style.display = 'block';
    big.onmousemove = function (ev) {
        var scroll = document.body.scrollTop;
        var ev = ev || window.event;
        var x = ev.clientX - box.offsetLeft - control.offsetWidth/2;
        var y = ev.clientY + scroll - box.offsetTop - control.offsetHeight/2;
        if (x<0){
            x = 0;
        }
        if (x>big.offsetWidth-control.offsetWidth){
            x = big.offsetWidth-control.offsetWidth;
        }
        if (y<0){
            y = 0;
        }
        if (y>big.offsetHeight-control.offsetHeight){
            y = big.offsetHeight-control.offsetHeight;
        }
        control.style.left = x + 'px';
        control.style.top = y + 'px';
        view_box.style.left = -2*x+'px';
        view_box.style.top = -2*y+'px';
    }

}
big.onmouseout=function(){
    control.style.display = 'none';
    _box.style.display='none';
}
