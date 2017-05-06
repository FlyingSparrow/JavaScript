$(function(){
	styleElementSiblings('h1', 'intro');
});

function styleElementSiblings(tag, theclass){
	$(tag).each(function(i){
		var elem = $(this).next('p:first');
		elem.addClass(theclass);
	})
}