//
// class Cookie {
//     constructor() {
//         this.upd()
//     }
//
//     map = new Map();
//
//     upd = ()=>{
//         document.cookie.split("; ").forEach( it => {
//             let i =  it.split("=")
//             this.map.set(i[0],i[1])
//         })
//     };
//
//     get = (name) => {
//         if (this.map.size === 0) this.upd();
//         return this.map.get(name)
//     };
//
//     set = (cookieName,cookieValue)=>{
//         this.map.set(cookieName, cookieValue);
//         document.cookie = cookieName + "=" + cookieValue + ";";
//     };
//
// }
//
// const cookie = new Cookie();