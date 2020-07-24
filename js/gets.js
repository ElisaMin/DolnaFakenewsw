/*
cookie = new Map();
function getCookie(){
	let tmp = document.cookie;
	tmp.split(";").forEach(function (it){
		let a = it.split("=");
		cookie.set(a[0],a[1]);
		console.log(it)
	})
	return cookie
}
function getCookie(name){
	if (cookie){
		cookie.get(name)
	}
	return null;
}
getCookie();

function setCookie(cookieName,valueName){
	
	if (!getCookie(cookieName)) {
		document.cookie += (cookieName+"="+valueName+";");
		cookie.set(cookieName,valueName);
	}else{
		let s = ""; 
		getCookie();
		cookie.set(cookieName,valueName); 
		cookie.forEach(function(v,k){ 
			s+=(k+"="+v+";")
		})
		document.cookie = s
	}
}
*/

var l = "zh";