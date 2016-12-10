var numresult;
var str;
function onclicknum(nums){
	str = document.getElementById("nummessage");
	str.value=str.value+nums;
}
function onclickclear(){
	str = document.getElementById("nummessage");
	str.value="";
}
function onclickresult(){
	str = document.getElementById("nummessage");
    numresult = eval(str.value);
    str.value = numresult;
}


















