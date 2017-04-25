function stripeTables(){
	if(!document.getElementsByTagName){
		return false;
	}
	var tables = document.getElementsByTagName('table');
	var odd, rows;
	for(var i=0; i<tables.length; i++){
		rows = tables[i].getElementsByTagName('tr');
		odd = false;
		for(var j=0; j<rows.length; j++){
			if(odd == true){
//				rows[j].style.backgroundColor = '#ffc';
//				rows[j].className = 'odd';
				addClass(rows[j], 'odd');
				odd = false;
			}else{
				odd = true;
			}
		}
	}
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

addLoadEvent(stripeTables);