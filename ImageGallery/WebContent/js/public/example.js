window.onload = function(){
/*	var testdiv = document.getElementById('testdiv');
	console.log(testdiv.innerHTML);
	testdiv.innerHTML = '<p>I inserted <em>this</em> content.</p>';
	
	var para = document.createElement('p');
	var info = 'nodeName: '+para.nodeName+', nodeType: '+para.nodeType;
	console.log(info);
	
	testdiv.appendChild(para);
	var txt = document.createTextNode('Hello world');
	para.appendChild(txt);*/
	
	var testdiv = document.getElementById('testdiv');
	var para = document.createElement('p');
	var txt1 = document.createTextNode('This is ');
	var emphasis = document.createElement('em');
	var txt2 = document.createTextNode('my');
	var txt3 = document.createTextNode(' content.');
	para.appendChild(txt1);
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	para.appendChild(txt3);
	testdiv.appendChild(para);
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