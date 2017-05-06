$(function(){
	displayAccesskeys();
});

function displayAccesskeys(){
	var links = $('a[accesskey]');
	if(!links){
		return false;
	}
	var akeys = new Array();
	links.each(function(i){
		var item = $(this);
		var key = item.attr('accesskey');
		var text = item.text();
		akeys[key] = text;
	});
	
	var html = '<ul>';
	for(key in akeys){
		var text = akeys[key];
		var str = key+' : '+text;
		html += '<li>'+str+'</li>';
	}
	html += '</ul>';
	
	$('body').append('<h3>Accesskeys</h3>');
	$('body').append(html);
}