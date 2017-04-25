function highlightRows(){
	if(!document.getElementsByTagName){
		return false;
	}
	rows = document.getElementsByTagName('tr');
	for(var i=0; i<rows.length; i++){
		var row = rows[i];
		row.onmouseover = function(){
			this.style.fontWeight = 'bold';
		}
		row.onmouseout = function(){
			this.style.fontWeight = 'normal';
		}
	}
}

addLoadEvent(highlightRows);