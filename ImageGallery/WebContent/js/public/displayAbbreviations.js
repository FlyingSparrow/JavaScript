function displayAbbreviations(){
	if(!check()){
		return false;
	}
	//取得所有缩略词
	var abbreviations = document.getElementsByTagName('abbr');
	if(!abbreviations){
		return false;
	}
	var defs = new Array();
	
	//遍历这些缩略词
	for(var i=0; i<abbreviations.length; i++){
		var item = abbreviations[i];
		if(item.childNodes.length < 1){
			continue;
		}
		var definition = item.getAttribute('title');
		var key = item.lastChild.nodeValue;
		defs[key] = definition;
	}
	
	//创建定义列表
	var dlist = document.createElement('dl');
	//loop through the definitions
	for(key in defs){
		var definition = defs[key];
		//创建定义标题
		var dtitle = document.createElement('dt');
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//create the definition description
		var ddesc = document.createElement('dd');
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	
	if(dlist.childNodes.length < 1){
		return false;
	}
	
	//创建标题
	var header = document.createElement('h2');
	var header_text = document.createTextNode('Abbreviations');
	header.appendChild(header_text);
	
	var body = document.getElementsByTagName('body')[0];
	//把标题添加到页面主体
	body.appendChild(header);
	//把定义列表添加到页面主体
	body.appendChild(dlist);
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

addLoadEvent(displayAbbreviations);