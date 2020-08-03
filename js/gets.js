// Cookies

const cookies = {
    map:new Map(),
    get:(name)=>{
        if (!cookies.map) cookies.update();
        return cookies.map.get(name);
        },

    set:(cookieName,cookieValue)=>{
        cookies.map.set(cookieName, cookieValue);
        document.cookie = cookieName + "=" + cookieValue + ";";
        },

    update:()=>{
        document.cookie.split("; ").forEach(it => {
            let a = it.split("=");
            cookies.map.set(a[0], a[1]);
        })}
};
cookies.update();

var currentLang = lang.langs[0];//初始值
function setDefaultLang () {
    let li = cookies.get("lang");
    if (li == void 0) lang.set(0)
    else lang.set(cookies.get("lang"))
}
setDefaultLang();
// "CHINA/INDEX.HTML" to INDEX
function getURLFilename() {let path = window.location.pathname.split('/');return path[path.length - 1].split(".")[0];};