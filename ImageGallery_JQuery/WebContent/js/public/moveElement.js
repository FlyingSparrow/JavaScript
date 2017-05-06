function moveElement(elementID, final_x, final_y, interval){
	var elem = $(elementID);
	if(elem.attr('movement')){
		clearTimeout(elem.attr('movement'));
	}
	if(!elem.position().left){
		elem.css('left', '0px');
	}
	if(!elem.position().top){
		elem.css('top','0px');
	}
	var xpos = parseInt(elem.position().left);
	var ypos = parseInt(elem.position().top);
	if(xpos == final_x && ypos == final_y){
		return true;
	}
	var dist = 0;
	if(xpos < final_x){
		dist = Math.ceil((final_x - xpos)/10);
		xpos+=dist;
	}
	if(xpos > final_x){
		dist = Math.ceil((xpos - final_x)/10);
		xpos-=dist;
	}
	if(ypos < final_y){
		dist = Math.ceil((final_y - ypos)/10);
		ypos+= dist;
	}
	if(ypos > final_y){
		dist = Math.ceil((ypos - final_y)/0);
		ypos-= dist;
	}
	elem.css('left', xpos+'px');
	elem.css('top', ypos+'px');
	
	var repeat = 'moveElement("'+elementID+'", '+final_x+', '+final_y+', '+interval+')';
	elem.attr('movement', setTimeout(repeat, interval));
}