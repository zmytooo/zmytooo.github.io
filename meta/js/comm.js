/**
 * Created by lanou on 16/10/10.
 */
//登录注册
//首页顶部注册登录按钮
var Regedit = document.querySelector(".Regedit");
var Sign = document.querySelector(".Sign");
//蒙版 注册1 注册2 登录
var mask = document.querySelector(".mask");
var regedit1 = document.querySelector(".mask .regedit1");
var regedit2 = document.querySelector(".mask .regedit2");
var sign_in = document.querySelector(".sign_in");
//注册2的确认按钮 和 登录的确认按钮
var enter = document.querySelectorAll(".mask .enter");
//创建新账户
var create = document.querySelector(".create");
//已经注册 点击登录
var alreadyRegedit =document.querySelector(".regedit1 .bottom");
//未登录，点击注册META
var goRegedit =document.querySelector(".sign_in .bottom");
//登录成功前后
var login_before=document.querySelector(".login_before");
var login_after=document.querySelector(".login_after");
//退出登录
var sign_out = document.querySelector(".sign_out");

var guan = document.querySelector("#guan");
var guan2 = document.querySelector("#guan2");

guan.onclick=function(){
    mask.style.display='none'
}
guan2.onclick=function(){
    mask.style.display='none'
}

Regedit.onclick =function(){
    mask.style.display='block';
    regedit1.style.display='block';
    maskTrue();
}
create.onclick =function(){
    regedit1.style.display='none';
    regedit2.style.display='block';
}

//确认登录 并设置cookie值
for (var i=0 ;i<2; i++){
    enter[i].onclick =function(){
        regedit1.style.display='none';
        regedit2.style.display='none';
        sign_in.style.display='none';
        mask.style.display='none';
        maskTrue();
        alert('注册成功');
        login_before.style.display='none';
        login_after.style.display='block';
        setCookie('username','王楠',1);
    }
}
if (getCookie('username')){
    login_before.style.display='none';
    login_after.style.display='block';
}
//退出登录
sign_out.onclick=function(){
    setCookie('username','王楠',-1);
    location.reload();
}
alreadyRegedit.onclick=function(){
    regedit1.style.display='none';
    sign_in.style.display='block';
}
goRegedit.onclick=function(){
    sign_in.style.display='none';
    regedit1.style.display='block';
}
Sign.onclick=function(){
    mask.style.display='block';
    sign_in.style.display='block';
    maskTrue();
}
function maskTrue(){
    if (mask.style.display=='block'){
        document.body.style.overflow='hidden';
    }else{
        document.body.style.overflow='';
    }
}

//设置和得到cookie
function setCookie(name,value,expiredays){
    var date = new Date();
    date.setDate(date.getDate()+expiredays);
    document.cookie = name+'='+value+';expires='+date.toGMTString();
}
function getCookie(c_name){
    var c_start=0,c_end=0;
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1){
                c_end=document.cookie.length;
            }
            return document.cookie.substring(c_start,c_end);
        }
    }
    return "";
}


//购物袋
var shoppingBag = document.querySelector(".shopping");
var box =document.querySelector(".shopping box");
//购物列表
var shopping_list = document.querySelector(".shopping_list");
var s_ul = document.querySelector(".shopping_list ul");
var have = document.querySelector(".shopping_list .have");
var no = document.querySelector(".shopping_list .no");
//购物袋/购物列表移入显示，移除隐藏
shoppingBag.onmouseover=function(){
    shopping_list.style.display='block';
    shoppingBag.style.borderColor='#ddd';
    shoppingBag.style.borderBottomColor='white';
    if (s_ul.innerHTML){
        have.style.display='block';
        no.style.display='none';
    }else{
        have.style.display='none';
        no.style.display='block';
    }
}
shopping_list.onmouseover=function(){
    shopping_list.style.display='block';
    shoppingBag.style.borderColor='#ddd';
    shoppingBag.style.borderBottomColor='white';
    if (s_ul.innerHTML){
        have.style.display='block';
        no.style.display='none';
    }else{
        have.style.display='none';
        no.style.display='block';
    }
}
shoppingBag.onmouseout=function() {
    shopping_list.style.display='none';
    shoppingBag.style.borderColor='';
    shoppingBag.style.borderBottomColor='white';
}
shopping_list.onmouseout=function() {
    shopping_list.style.display='none';
    shoppingBag.style.borderColor='';
    shoppingBag.style.borderBottomColor='white';
}




//取部分购物袋信息
var box = document.querySelector(".shopping .box");
var count = document.querySelector(".shopping .count");
var num=getCookie('n');
function addMore(){
    var str='';
    var n = getCookie('n');
    if (n){
        if (n>0){
            count.innerHTML=n;
            count.style.display='block';
            box.style.background = 'url("../img/shopping_bg.png") no-repeat';
        }
        for (var i=0; i<n; i++){
            str += `<li>
                        <img src="../img/shopping_list.jpg" alt="">
                        <div class="right1">
                            <p>麦塔单肩包</p>
                            <div class="size">
                                <p>尺寸</p>
                                <p class="size_value">均码</p>
                            </div>
                            <div class="count">
                                <p>数量</p>
                                <p class="count_value">
                                    <span class="minus">- </span><input type="text" value="1" class="value"><span class="plus"> +</span>
                                </p>
                            </div>
                            <div class="price">
                                <p>总价</p>
                                <p class="price_value">￥199</p>
                            </div>
                        </div>
                        <div class="del">×</div>
                    </li>`;
        }
    }
    return str;
}
s_ul.innerHTML = addMore();

//获取列表加减运算信息
var minus = document.querySelectorAll(".minus");
var plus = document.querySelectorAll(".plus");
var sum = document.querySelectorAll(".price_value");
var num_count = document.querySelectorAll(".value");
var del =document.querySelectorAll(".del");
var minus_length=minus.length;
for (var i=0; i<minus_length;i++){
    minus[i].index=i;
    plus[i].index=i;
    del[i].index=i;
    minus[i].onclick =function(){
        num_count[this.index].value--;
        if (num_count[this.index].value<1){
            num_count[this.index].value=1;
        }
        sum[this.index].innerHTML = '￥'+num_count[this.index].value*199;
    }
    plus[i].onclick =function(){
        num_count[this.index].value++;
        sum[this.index].innerHTML = '￥'+num_count[this.index].value*199;
    }
    del[i].onclick =function(){
        num--;
        count.innerHTML=num;
        if (num<1){
            count.style.display='none';
            box.style.background = '';
        }
        setCookie('n',num,1);
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}