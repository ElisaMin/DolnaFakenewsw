

try{
	Vue.component("my-nav",{
		props:["head","more","abme","sett"],
		template:'<nav class="navbar  navbar-expand-sm navbar-light bg-white mt-1"><div class="navbar-brand"><span><h3>CHINA !!</h3></span></div><button class="navbar-toggler " type="button" data-toggle="collapse"><span class="navbar-toggler-icon"></span></button><div class="container-fluid"></div><div class="collapse navbar-collapse"><div class="navbar-nav"><a href="index.html" class="nav-item nav-link">{{head}}</a><a href="more.html" class="nav-item nav-link">{{more}}</a><a href="settings.html" class="nav-item nav-link">{{sett}}</a><a href="about.html" class="nav-item nav-link">{{abme}}</a></div></div></nav>'
	})
	new Vue({
		el:"#nav"
	})
}catch(e){
	console.log(e)
}