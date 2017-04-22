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

function popUp(winURL){
	window.open(winURL, 'popup', 'width=320,height=480');
}

window.onload = function(){
	if(!document.getElementsByTagName){
		return false;
	}
	var lnks = document.getElementsByTagName('a');
	for(var i=0; i<lnks.length; i++){
		if(lnks[i].getAttribute('class') == 'popup'){
			lnks[i].onclick = function(){
				popUp(this.getAttribute('href'));
				return false;
			}
		}
	}
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

addLoadEvent(prepareGallery);