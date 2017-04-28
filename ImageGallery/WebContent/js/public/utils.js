function inputSupportsType(type){
	if(!document.createElement){
		return false;
	}
	var input = document.createElement('input');
	input.setAttribute('type', type);
	if(input.type == 'text' && type != 'text'){
		return false;
	}else{
		return true;
	}
}

function elementSupportsAttribute(elementName, attribute){
	if(!document.createElement){
		return false;
	}
	var temp = document.createElement(elementName);
	return (attribute in temp);
}