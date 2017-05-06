$(function(){
	prepareGallery();
	preparePlaceholder();
});

function showPic(whichPic){
	var placeholder = $('#placeholder');
	if(!placeholder){
		return false;
	}
	var picture = $(whichPic);
	var source = picture.attr('href');
	placeholder.attr('src', source);
	
	var text = '';
	if(picture.attr('title')){
		text = picture.attr('title');
	}
	var description = $('#description');
	if(description){
		description.text(text);
	}
	return true;
}

function prepareGallery(){
	var gallery = $('#imagegallery');
	if(!gallery){
		return false;
	}
	gallery.find('a').each(function(i){
		$(this).bind('click', function(){
			return showPic(this) ? false : true;
		});
	});
}

function preparePlaceholder(){
	if(!$('#imagegallery')){
		return false;
	}
	$('#imagegallery').after('<img id="placeholder" src="../images/placeholder.jpg" '
			+'title="my image gallery" />');
	$('#placeholder').after('<p id="description">Choose an image.</p>')
}