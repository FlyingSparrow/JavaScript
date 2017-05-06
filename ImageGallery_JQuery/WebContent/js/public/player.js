$(function(){
	createVideoControls();
});

function createVideoControls(){
	$('video').each(function(i){
		addControls($(this));
	});
}

function addControls(vid){
	vid.removeAttr('controls');
	vid.attr('height', vid.attr('videoHeight'));
	vid.attr('width', vid.attr('videoWidth'));
	vid.parent().css('height', vid.attr('videoHeight')+'px');
	vid.parent().css('width', vid.attr('videoWidth')+'px')
	
	var html = '<div class="controls"><button id="play" title="Play">&#x25BA;</button></div>';
	vid.parent().prepend(html);
	
	$(document).on('click', '#play', function(){
		if(vid[0].ended){
			vid[0].currentTime = 0;
		}
		if(vid[0].paused){
			vid[0].play();
		}else{
			vid[0].pause();
		}
	});
	
	$(document).on('play', vid, function(){
		var play = $('#play');
		play.html('&#x2590;&#x2590;');
		play.attr('paused', true);
		return false;
	});
	$(document).on('pause', vid, function(){
		var play = $('#play');
		play.removeAttr('paused');
		play.html('&#x25BA;');
		return false;
	});
	$(document).on('ended', vid, function(){
		vid.pause();
		return false;
	});
}