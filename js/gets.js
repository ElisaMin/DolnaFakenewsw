// Cookies
cookie = new Map();function updateCookie(){let tmp = document.cookie;tmp.split("; ").forEach( it => {let a = it.split("=");cookie.set(a[0],a[1]);})}function getCookie(name){if (!cookie) updateCookie();return cookie.get(name);}updateCookie();function setCookie(cookieName,value){cookie.set(cookieName,value);document.cookie = cookieName+"="+value+";";}

//getLang

var currentLang = lang[0];//初始值
function setLang(l){
	
	currentLang=lang[l] //传入INDEX
	setCookie("lang",l);//保存到COOKIE
	
	/*switch (l) { 遗留代码
		case "zh":currentLang = lang.zh;break;
		case "en":currentLang = lang.en;break;
		case "hz":currentLang = lang.hz;break;
	}*/
}
let l = getCookie("lang"); //从cookie中拿出lang的set
if (l == void 0) { //判空
	setLang(0); //空则默认
}else{
	setLang(getCookie("lang")) //非空设置
}

function getURLFilename(){
	let path =  window.location.pathname.split('/');
	return path[path.length-1].split(".")[0];
};