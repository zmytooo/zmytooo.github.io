<?php 
	header("Content-Type: application/json;charset=utf-8");
	$username=$_GET["username"];
	$password=$_GET["password"];
	$remember=$_GET["remember"];
	if (empty($username)||empty($password)||empty($remember)) {
		echo "请求参数有错误，请检查";
	}
	$data=array(
		array("name"=>"mmyu","age"=>20,"password"=>"000000"),
		array("name"=>"ybb","age"=>22,"password"=>"111111"),
		array("name"=>"kkw","age"=>22,"password"=>"222222"),
		array("name"=>"wzz","age"=>20,"password"=>"333333"),
		array("name"=>"wqq","age"=>20,"password"=>"444444")
	);
	foreach ($data as $key => $value) {
		if ($value["name"]==$username&&$value["password"]==$password) {
			$resulte='{"msg":true}';
			break;
		}else{
			$resulte='{"msg":false}';
		}
	}
	date_default_timezone_set('PRC');
	setcookie("username",$username,time()+10);
	echo $resulte;
 ?>