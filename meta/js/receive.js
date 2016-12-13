/**
 * Created by lanou on 16/10/10.
 */
//点击 1️⃣ 到登录界面
var first = document.querySelector(".go_login");
first.onclick =function(){
    mask.style.display='block';
    sign_in.style.display='block';
    maskTrue();
}

//获取显示的购物列表
var open_ul = document.querySelector(".bottom1 ul");
function _reload(){
    open_ul.innerHTML =`<div class="title">
                        <p>即将送货</p>
                        <p>以下商品即将寄出</p>
                    </div>`+s_ul.innerHTML;
}
_reload();
//获取open_ul列表加减运算信息 同步数据
var minus1 = document.querySelectorAll(".bottom1 .minus");
var plus1 = document.querySelectorAll(".bottom1 .plus");
var sum1 = document.querySelectorAll(".bottom1 .price_value");
var num_count1 = document.querySelectorAll(".bottom1 .value");
var del1 =document.querySelectorAll(".bottom1 .del");
var minus_length1=minus1.length;
for (var i=0; i<minus_length1;i++){
    minus1[i].index=i;
    plus1[i].index=i;
    del1[i].index=i;
    minus1[i].onclick =function(){
        num_count1[this.index].value--;
        num_count[this.index].value--;
        if (num_count1[this.index].value<1){
            num_count1[this.index].value=1;
            num_count[this.index].value=1;
        }
        sum1[this.index].innerHTML = '￥'+num_count1[this.index].value*199;
        sum[this.index].innerHTML = '￥'+num_count1[this.index].value*199;
        total();
    }
    minus[i].onclick =function(){
        num_count1[this.index].value--;
        num_count[this.index].value--;
        if (num_count1[this.index].value<1){
            num_count1[this.index].value=1;
            num_count[this.index].value=1;
        }
        sum1[this.index].innerHTML = '￥'+num_count1[this.index].value*199;
        sum[this.index].innerHTML = '￥'+num_count1[this.index].value*199;
        total();
    }
    plus1[i].onclick =function(){
        num_count1[this.index].value++;
        num_count[this.index].value++;
        sum1[this.index].innerHTML = '￥'+num_count1[this.index].value*199;
        sum[this.index].innerHTML = '￥'+num_count[this.index].value*199;
        total();
    }
    plus[i].onclick =function(){
        num_count1[this.index].value++;
        num_count[this.index].value++;
        sum1[this.index].innerHTML = '￥'+num_count1[this.index].value*199;
        sum[this.index].innerHTML = '￥'+num_count[this.index].value*199;
        total();
    }
    del1[i].onclick =function(){
        num--;
        count.innerHTML=num;
        if (num<1){
            count.style.display='none';
            box.style.background = '';
        }
        setCookie('n',num,1);
        this.parentNode.parentNode.removeChild(this.parentNode);
        del[this.index].parentNode.parentNode.removeChild(del[this.index].parentNode);
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
        del1[this.index].parentNode.parentNode.removeChild(del1[this.index].parentNode);
    }
}

//小计汇总函数
function total(){
    var small_total = document.querySelector(".small_total");
    var sum_total = document.querySelector(".sum_total");
    var sendPrice = document.querySelector(".sendprice");
    var freePrice = document.querySelector(".freeprice");
    var price = 0;
    for (var i=0; i< minus_length1; i++){
        price +=parseInt(sum[i].innerHTML.substring(1));
        small_total.innerHTML = price;
        sum_total.innerHTML= price -freePrice.innerHTML + Number(sendPrice.innerHTML) ;
    }
}
total();