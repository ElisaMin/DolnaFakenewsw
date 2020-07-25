// Cookies
cookie = new Map();function updateCookie(){let tmp = document.cookie;tmp.split("; ").forEach( it => {let a = it.split("=");cookie.set(a[0],a[1]);})}function getCookie(name){if (!cookie) updateCookie();return cookie.get(name);}updateCookie();function setCookie(cookieName,value){cookie.set(cookieName,value);document.cookie = cookieName+"="+value+";";}

//getLang
var currentLang = lang.zh;