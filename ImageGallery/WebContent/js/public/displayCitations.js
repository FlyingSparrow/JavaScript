function displayCitations(){
	if(!check()){
		return false;
	}
	//取得所有引用
	var quotes = document.getElementsByTagName('blockquote');
	if(!quotes){
		return false;
	}
	//遍历引用
	for(var i=0; i<quotes.length; i++){
		var item = quotes[i];
		//如果没有cite属性，继续循环
		if(!item.getAttribute('cite')){
			continue;
		}
		//保存cite属性
		var url = item.getAttribute('cite');
		//取得引用中的所有元素节点
		var quoteChildren = item.getElementsByTagName('*');
		//如果没有元素节点，继续循环
		if(quoteChildren.length < 1){
			continue;
		}
		//取得引用中的最后一个元素节点
		var elem = quoteChildren[quoteChildren.length - 1];
		//创建标记
		var link = document.createElement('a');
		var link_text = document.createTextNode('source');
		link.appendChild(link_text);
		link.setAttribute('href', url);
		
		var superscript = document.createElement('sup');
		superscript.appendChild(link);
		//把标记添加到引用中的最后一个元素节点
		elem.appendChild(superscript);
	}
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

addLoadEvent(displayCitations);