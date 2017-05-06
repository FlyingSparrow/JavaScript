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