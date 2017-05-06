$(function(){
	positionMessage();
});

function positionMessage(){
	if($('#message').length < 1){
		return false;
	}
	var elem = $('#message');
	elem.css({
		position: 'absolute',
		left: '50px',
		top: '100px'
	});
//	moveElement('message', 200, 100, 10);
	moveElement('#message', 125, 25, 20);
	
	if(!$('#message2')){
		return false;
	}
	var elem2 = $('#message2');
	elem2.css({
		position: 'absolute',
		left: '50px',
		top: '50px'
	});
	moveElement('#message2', 125, 125, 20);
}