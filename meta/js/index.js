/**
 * Created by lanou on 16/10/8.
 */

//内容主题列表
//获取全部li
var aLi =document.querySelectorAll(".content li");
//获取全部图片
var aImg=document.querySelectorAll(".content img");
//加入购物车
var toBag = document.querySelectorAll(".tobag");
var con_length = aLi.length;

for (var i=0; i<con_length; i++){
    aLi[i].index = i;
    aLi[i].onmouseover=function(){
        aImg[this.index].src='../img/bag2.jpg';
    }
    aLi[i].onmouseout=function(){
        aImg[this.index].src='../img/bag1.jpg';0
    }
    toBag[i].onclick =function(){
        num++;
        count.innerHTML=num;
        count.style.display='block';
        box.style.background = 'url("../img/shopping_bg.png") no-repeat';
        setCookie('n',num,1);
        s_ul.innerHTML =addMore();

        //toBig后再次绑定下面的代码，不然执行不了
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
                console.log(s_ul.innerHTML);
                setCookie('n',num,1);
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        }
    }
}

//首页轮播图
function lunbo(obj){
    var box = document.querySelector(".lunbo");
    var ul = document.querySelector(".lunbo ul");
    var aLi = document.querySelectorAll(".lunbo ul li");
    var aImg = document.querySelectorAll(".lunbo img");
    var ol = document.createElement("ol");
    var timer=null;
    var length = aLi.length;
    var str="";
    for (var i=0; i<length; i++){ str +="<li></li>";}
    ol.innerHTML = str;
    box.appendChild(ol);
    var oLi = document.querySelectorAll(".lunbo ol li");
    var pre = document.createElement("div");
    var next = document.createElement("div");
    pre.style.display="none";
    next.style.display="none";
    box.appendChild(pre);
    box.appendChild(next);
    pre.innerHTML="〈";
    next.innerHTML="〉";
    //入口函数
    this.init =function () {
        this.format();
        if (obj.type=="opacity"){
            this.styleOpacity();
        }else if (obj.type=="left"){
            this.runStyle('width','offsetWidth','left','offsetLeft');
        }else if (obj.type=="top"){
            this.runStyle('height','offsetHeight','top','offsetTop');
        }else{
            alert(`参数格式\n{ \nwidth:'500px',\nheight:'300px',\ntype:'opacity'/'left'/'top'\n}`)
        }

    }
    //参数列表(height,offsetHeight,top,offsetTop,)
    this.runStyle =function(x,y,z,t){
        var n=0,num=0,speed=0,timer1=null;
        ul.innerHTML += ul.innerHTML;
        var aLi = document.querySelectorAll(".lunbo ul li");
        var length1=aLi[0][y];
        ul.style[x] = aLi.length*length1+"px";
        var length2 = ul[y];
        for (var i=0;i<length;i++){
            oLi[i].index=i;
            oLi[i].onmouseover=function(){
                n = this.index;
                var offLeft=ul[t]; //获取起始位置的offsetLeft的值
                clearInterval(timer);
                timer = setInterval(function(){
                    num++;
                    ul.style[z] = ul[t] -(length1*n+offLeft)/120*num+'px';
                    if (num == 15){
                        clearInterval(timer);
                        ul.style[z] =-length1*n +'px';  //对的精准
                        num = 0;
                    }
                },30)
                for (var j=0; j<length;j++){
                    setStyle(oLi[j],{
                        color:'',
                        background:'white',
                    })
                }
                setStyle(oLi[n],{
                    color:'white',
                    background:'red',
                });
            };
        }
        pre.onclick = function(){
            _default();
        }
        next.onclick = function(){
            speed = 1;
            n--;
            if (n<0){
                n = length-1;
            }
            if (ul[t] == 0){
                ul.style[z] =-length2/2 +'px';
            }
            setResult();
        }
        box.onmouseover=function(){
            pre.style.display="block";
            next.style.display="block";
            clearInterval(timer1);
        }
        box.onmouseout=function(){
            pre.style.display="none";
            next.style.display="none";
            auto();
        }

        //开机自动运行
        function auto(){
            timer1 =setInterval(function(){
                _default();
            },2000)
        }
        auto();

        //设置默认自动运行的函数
        function _default(){
            speed = -1;
            n++;
            if (n>length-1){
                n = 0;
            }
            if (ul[t] == -length2/2){
                ul.style[z] =0 ;
            }
            setResult();
        }
        function setResult(){
            for (var j=0; j<length;j++){
                setStyle(oLi[j],{
                    color:'',
                    background:'white',
                })
            }
            setStyle(oLi[n],{
                color:'white',
                background:'red',
            });
            clearInterval(timer);
            timer = setInterval(function(){
                num++;
                ul.style[z] = ul[t] +length1/120*num*speed+'px';
                if (num == 15){
                    clearInterval(timer);
                    ul.style[z] =-length1*n +'px';  //对的精准
                    num = 0;
                }
            },30)
        }
    }
    //格式化
    this.format = function(){
        var str="";
        //box 格式化
        setStyle(box, {
            overflow:"hidden",
            minWidth:'1340px',
            height:obj.height,
            position:"relative",
        });
        //ul li格式化
        setStyle(ul, {
            listStyle:"none",
            padding:"0",
            margin:"0",
            position:'absolute',
        });
        for (var i=0; i<length; i++){
            setStyle(aLi[i],{
                padding:"0",
                margin:"0",
                width:obj.width,
                height:obj.height,
                transition:'opacity 1s',
                float:'left',
            });
            setStyle(aImg[i],{
                width:'100%',
                height:'100%',
            });
            setStyle(oLi[i], {
                padding:"0",
                margin:"0 5px",
                width:'6px',
                height:'6px',
                borderRadius:'50%',
                background:'white',
                float:'left',
                cursor:'pointer',
            });
            setStyle(oLi[0],{
                color:'white',
                background:'red',
            })
        }
        var ML = -oLi.length*(oLi[0].offsetWidth+10)/2+"px";  //css不能是函数，只能这样
        setStyle(ol, {
            padding:'0',
            position:'absolute',
            bottom:"20px",
            listStyle:"none",
            textAlign:'center',
            left:'50%',
            marginLeft:ML,
            lineHeight:'20px',
            textAlign:'center',
        });
        //创建前后按钮

        setStyle(pre, {
            width:'50px',
            height:'70px',
            position:'absolute',
            top:'50%',
            background:'black',
            opacity:'0.5',
            filter:'alpha(opacity=50)',
            color:'white',
            marginTop:'-35px',
            lineHeight:'70px',
            fontSize:'40px',
            textIndent:'-5px',
            cursor:'pointer',
        });
        setStyle(next, {
            width:'50px',
            height:'70px',
            position:'absolute',
            top:'50%',
            background:'black',
            opacity:'0.5',
            filter:'alpha(opacity=50)',
            color:'white',
            marginTop:'-35px',
            lineHeight:'70px',
            fontSize:'40px',
            textIndent:'15px',
            cursor:'pointer',
            right:'0',
        });
    }

    //设置css样式
    function setStyle(){
        if(arguments.length === 3){
            // arguments[0].style.arguments[1] = arguments[2];  用点语法说明arguments[0]是style的属性，重点！！
            arguments[0].style[arguments[1]] = arguments[2];
        }else if(arguments.length === 2 ){
            for( var i in arguments[1]){
                arguments[0].style[i] = arguments[1][i];
            }
        }else{
            alert("三个参数 分别是:对象,属性,属性值\n两个参数 分别是:对象,{属性：属性值}");
        }
    }

};

var _width = screen.width;
var aLi = document.querySelectorAll(".lunbo li");
for (var i=0; i<aLi.length; i++){
    aLi[i].style.minWidth =1340+'px';
}

var lunboLeft = new lunbo({
    width:_width+'px',
    height:'540px',
    type:'left',
});
lunboLeft.init();
