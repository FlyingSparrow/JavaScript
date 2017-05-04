function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChilde == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function showPic(whichPic){
	var placeholder = document.getElementById('placeholder');
	if(!placeholder){
		return false;
	}
	if(placeholder.nodeName != 'IMG'){
		return false;
	}
	var source = whichPic.getAttribute('href');
	placeholder.setAttribute('src', source);
	
	var text = '';
	if(whichPic.getAttribute('title')){
		text = whichPic.getAttribute('title');
	}
	var description = document.getElementById('description');
	if(description){
		if(description.firstChild.nodeType == 3){
			//如果是文本节点
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function prepareGallery(){
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementsByTagName){
		return false;
	}
	var gallery = document.getElementById('imagegallery');
	if(!gallery){
		return false;
	}
	var links = gallery.getElementsByTagName('a');
	for(var i=0; i<links.length; i++){
		links[i].onclick = function(){
			return showPic(this) ? false : true;
		}
	}
}

function preparePlaceholder(){
	if(!document.getElementById){
		return false;
	}
	if(!document.createElement){
		return false;
	}
	if(!document.createTextNode){
		return false;
	}
	if(!document.getElementById('imagegallery')){
		return false;
	}
	
	var placeholder = document.createElement('img');
	placeholder.setAttribute('id', 'placeholder');
	placeholder.setAttribute('src', '../images/placeholder.jpg');
	placeholder.setAttribute('title', 'my image gallery');
	
	var description = document.createElement('p');
	description.setAttribute('id', 'description');
	var desctext = document.createTextNode('Choose an image.');
	description.appendChild(desctext);
	
	/*var body = document.getElementsByTagName('body')[0];
	body.appendChild(placeholder);
	body.appendChild(description);*/
	
	var gallery = document.getElementById('imagegallery');
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);