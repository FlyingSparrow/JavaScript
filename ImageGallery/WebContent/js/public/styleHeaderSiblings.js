function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

function styleHeaderSiblings(){
	if(!document.getElementsByTagName){
		return false;
	}
	var headers = document.getElementsByTagName('h1');
	if(headers){
		var elem = null;
		for(var i=0; i<headers.length; i++){
			var item = headers[i];
			elem = getNextElement(item.nextSibling);
			elem.style.fontWeight = 'bold';
			elem.style.fontSize = '1.2em';
		}
	}
}
addLoadEvent(styleHeaderSiblings);