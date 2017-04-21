function showPic(whichPic){
	var source = whichPic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src', source);
	
	var text = whichPic.getAttribute('title');
	var description = document.getElementById('description');
	description.firstChild.nodeValue = text;
	console.log('description nodeValue='+description.nodeValue);
	console.log('description[0] nodeValue='+description.childNodes[0].nodeValue);
	console.log('description[0] nodeValue='+description.firstChild.nodeValue);
	
//	var body_element = document.getElementsByTagName('body')[0];
//	console.log(body_element.nodeType);
}