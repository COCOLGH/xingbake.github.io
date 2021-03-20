// 勾选“下次自动登录” 
var flag = true;
function ok() {
	var ok = document.getElementsByClassName('gouxuankuang')[0];
	if(flag == true){
		ok.className = ok.className + ' glyphicon ' + ' glyphicon-ok';
		ok.style.backgroundColor = '#00A862';
		flag = false;
	}else{
		ok.className = 'gouxuankuang';
		ok.style.backgroundColor = '#efefef';
		flag = true;
	}
}