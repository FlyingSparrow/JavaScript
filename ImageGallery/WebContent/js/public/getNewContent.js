function getNewContent(){
	var request = getHTTPObject();
	if(request){
		request.open('GET', 'example.txt', true);
		request.onreadystatechange = function(){
			if(request.readyState == 4){
				console.log('Response received');
				var para = document.createElement('p');
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	}else{
		alert('Sorry, your browser doesn\'t support XMLHttpRequest');
	}
	console.log('Function Done');
}
addLoadEvent(getNewContent);