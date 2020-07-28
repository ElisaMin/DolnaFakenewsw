

try{
	Vue.component("my-nav",{
		props:["head","more","abme","sett"],
		template:'<nav class="navbar  navbar-expand-sm navbar-light bg-white mt-1">'+
					'<div class="navbar-brand"><a id="homePageBtn" href="index.html" class="href-none-type" ><h3>CHINA !!</h3></a></div><button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbbar"><span class="navbar-toggler-icon"></span></button><div class="container-fluid"></div><div id="navbbar" class="collapse navbar-collapse">'+
					'<div class="navbar-nav"><a href="index.html" id="indexPageBtn" class="nav-item nav-link">{{head}}</a><a href="more.html" id="morePageBtn" class="nav-item nav-link" >{{more}}</a><a href="settings.html" id="settingsPageBtn" class="nav-item nav-link">{{sett}}</a><a href="about.html" class="nav-item nav-link" id="aboutPageBtn">{{abme}}</a></div></div></nav>'
	})
	new Vue({
		el:"#nav"
	})
	$('#'+getURLFilename()+'PageBtn').addClass("active");
}catch(e){
	console.log(e)
}