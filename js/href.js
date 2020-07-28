function setHref(label){
	document.querySelectorAll(label+"[href]").forEach(function (it) {
		$(it).click( ()=>{
			let href = $(it).attr("href");
			let target = $(it).attr("target")
			if (!target) {
				location.href = href;
			}else{
				window.open(href, target);
			}
		});
	});
}