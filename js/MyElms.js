Vue.component("block",{
	props:["color"],
	template:"<div v-bind:style=' 'backgroud:'+ color +';height:5rem;' '></div>"
});