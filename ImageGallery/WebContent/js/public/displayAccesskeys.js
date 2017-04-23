function displayAccesskeys(){
	if(!check()){
		return false;
	}
	var links = document.getElementsByTagName('a');
	if(!links){
		return false;
	}
	var akeys = new Array();
	for(var i=0; i<links.length; i++){
		var item = links[i];
		if(!item.getAttribute('accesskey')){
			continue;
		}
		var key = item.getAttribute('accesskey');
		var text = item.lastChild.nodeValue;
		akeys[key] = text;
	}
	var list = document.createElement('ul');
	for(key in akeys){
		var text = akeys[key];
		var str = key+' : '+text;
		var item = document.createElement('li');
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}
	var header = document.createElement('h3');
	var header_text = document.createTextNode('Accesskeys');
	header.appendChild(header_text);
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(header);
	body.appendChild(list);
}

function check(){
	if(!document.getElementsByTagName){
		return false;
	}
	if(!document.createElement){
		return false;
	}
	if(!document.createTextNode){
		return false;
	}
	return true;
}

addLoadEvent(displayAccesskeys);