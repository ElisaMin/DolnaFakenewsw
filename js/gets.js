// Cookies
cookie = new Map();function updateCookie(){let tmp = document.cookie;tmp.split("; ").forEach( it => {let a = it.split("=");cookie.set(a[0],a[1]);})}function getCookie(name){if (!cookie) updateCookie();return cookie.get(name);}updateCookie();function setCookie(cookieName,value){cookie.set(cookieName,value);document.cookie = cookieName+"="+value+";";}

//getLang

var currentLang = lang.zh;
function setLang(l){
	switch (l) {
		case "zh":currentLang = lang.zh;break;
		case "en":currentLang = lang.en;break;
		case "hz":currentLang = lang.hz;break;
	}
	setCookie("lang",l);
}
let l = getCookie("lang");
if (!l) {
	setLang("zh");
}else{
	setLang(getCookie("lang"))
}