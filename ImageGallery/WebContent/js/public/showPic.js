function showPic(whichPic){
	var source = whichPic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src', source);
	
	var text = whichPic.getAttribute('title');
	var description = document.getElementById('description');
	description.firstChild.nodeValue = text;
//	console.log('description nodeValue='+description.nodeValue);
//	console.log('description[0] nodeValue='+description.childNodes[0].nodeValue);
//	console.log('description[0] nodeValue='+description.firstChild.nodeValue);
//	
//	var body_element = document.getElementsByTagName('body')[0];
//	console.log(body_element.nodeType);
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