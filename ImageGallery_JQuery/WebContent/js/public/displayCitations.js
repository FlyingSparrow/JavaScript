$(function(){
	displayCitations();
});

function displayCitations(){
	//取得所有引用
	var quotes = $('blockquote[cite]');
	if(quotes.length < 1){
		return false;
	}
	//遍历引用
	quotes.each(function(i){
		var item = $(this);
		var url = item.attr('cite');
		var elem = item.find(':last-child');
		var html = '<sup><a href="'+url+'">source</a></sup>';
		elem.append(html);
	});
}