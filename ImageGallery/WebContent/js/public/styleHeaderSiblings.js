function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

function addClass(element, value){
	if(!element.className){
		element.className = value;
	}else{
		var newClassName = element.className;
		newClassName += ' ';
		newClassName += value;
		element.className = newClassName;
	}
}

function styleElementSiblings(tag, theclass){
	if(!document.getElementsByTagName){
		return false;
	}
	var elements = document.getElementsByTagName(tag);
	if(elements){
		var elem = null;
		for(var i=0; i<elements.length; i++){
			var item = elements[i];
			elem = getNextElement(item.nextSibling);
			addClass(elem, theclass);
		}
	}
}
addLoadEvent(function(){
	styleElementSiblings('h1', 'intro');
});