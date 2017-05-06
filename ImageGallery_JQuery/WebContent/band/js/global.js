$(function(){
	highlightPage();
	prepareSlideshow();
	prepareInternalnav();
	preparePlaceholder();
	prepareGallery();
	stripeTables();
	highlightRows();
	displayAbbreviations();
	focusLabels();
	prepareForms();
});

function highlightPage(){
	var navs = $('header nav');
	if(navs.length == 0){
		return false;
	}
	
	navs.find('a').each(function(i){
		var linkurl = $(this).attr('href');
		if(window.location.href.indexOf(linkurl) != -1){
			$(this).addClass('here');
			var linktext = $(this).text().toLowerCase();
			$('body').attr('id', linktext);
		}
	});
}

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

function prepareSlideshow(){
	if($('#intro').length < 1){
		return false;
	}
	var intro = $('#intro');
	var html = '<div id="slideshow"><img src="../images/frame.gif" alt="" id="frame" />'
		+'<img src="../images/slideshow.gif"'
		+' alt="a glimpse of what awaits you" id="preview" /></div>';
	intro.after(html);
	
	$('a').each(function(i){
		var item = $(this);
		item.bind('mouseover', function(){
			var destination = item.attr('href');
			if(destination.indexOf('index.html') != -1){
				moveElement('#preview', 0, 0, 5);
			}
			if(destination.indexOf('about.html') != -1){
				moveElement('#preview', -150, 0, 5);
			}
			if(destination.indexOf('photos.html') != -1){
				moveElement('#preview', -300, 0, 5);
			}
			if(destination.indexOf('live.html') != -1){
				moveElement('#preview', -450, 0, 5);
			}
			if(destination.indexOf('contact.html') != -1){
				moveElement('#preview', -600, 0, 5);
			}
		});
	});
}

function showSection(id){
	$('section').each(function(){
		var item = $(this);
		if(item.attr('id') != id){
			item.css({
				display: 'none'
			});
		}else{
			item.css({
				display: 'block'
			});
		}
	});
}

function prepareInternalnav(){
	$('article nav a[href]').each(function(i){
		var item = $(this);
		var sectionId = item.attr('href').split('#')[1];
		if($('#'+sectionId).length > 0){
			$('#'+sectionId).css({
				display: 'none'
			});
		}
		item.attr('destination', sectionId);
		item.on('click', function(){
			showSection(item.attr('destination'));
			return false;
		});
	});
}

function showPic(whichpic){
	if($('#placeholder').length < 1){
		return false;
	}
	var source = whichpic.attr('href');
	var placeholder = $('#placeholder');
	placeholder.attr('src', source);
	if($('#description').length < 1){
		return false;
	}
	var text = '';
	if(whichpic.attr('title')){
		text = whichpic.attr('title');
	}
	var description = $('#description').text(text);
	return false;
}

function preparePlaceholder(){
	if($('#imagegallery').length < 1){
		return false;
	}
	var html = '<p id="description">Choose an image</p><img id="placeholder"'
		+' src="../images/placeholder.gif" alt="my image gallery" />';
	$('#imagegallery').append(html);
}

function prepareGallery(){
	if($('#imagegallery').length < 1){
		return false;
	}
	
	$('#imagegallery a').each(function(i){
		var item = $(this);
		item.on('click', function(){
			return showPic(item);
		});
	});
}

function stripeTables(){
	$('table tr:odd').addClass('odd');
}

function highlightRows(){
	$('tr').each(function(i){
		var item = $(this);
		var oldClassName = item.attr('class');
		item.on('mouseover', function(){
			item.removeClass(oldClassName);
			item.addClass('highlight');
		});
		item.on('mouseout', function(){
			item.removeClass('highlight');
			item.addClass(oldClassName);
		});
	});
}

function displayAbbreviations(){
	var abbreviations = $('abbr');
	if(abbreviations.length < 1){
		return false;
	}
	var defs = new Array();
	abbreviations.each(function(i){
		var item = $(this);
		if(item.contents().length > 0){
			var definition = item.attr('title');
			var key = item.text();
			defs[key] = definition;
		}
	});
	
	var dtHtml = '';
	for(key in defs){
		var definition = defs[key];
		dtHtml += '<dt>'+key+'</dt><dd>'+definition+'</dd>';
	}
	if(dtHtml.length < 1){
		return false;
	}
	var html = '<h3>Abbreviations</h3>'+dtHtml;
	var articles = $('article');
	if(articles.length == 0){
		return false;
	}
	var container = articles[0];
	$(container).append(html);
}

function focusLabels(){
	$('label[for]').each(function(i){
		var item = $(this);
		var id = item.attr('for');
		if($('#'+id).length < 1){
			return false;
		}
		$('#'+id).focus();
	});
}

function resetFields(whichform){
	if(Modernizr.input.placeholder){
		return;
	}
	for(var i=0; i<whichform.elements.length; i++){
		var element = whichform.elements[i];
		if(element.type == 'submit'){
			continue;
		}
		var check = element.placeholder || element.getAttribute('placeholder');
		if(!check){
			continue;
		}
		
		var jqElement = $(element);
		jqElement.on('focus', function(){
			var item = $(this);
			var text = item.attr('placeholder');
			if(item.val() == text){
				item.removeClass(item.attr('class'));
				item.attr('class', '');
				item.val('');
			}
		});
		jqElement.on('blur', function(){
			var item = $(this);
			if(item.val() == ''){
				item.attr('class', 'placeholder');
				item.val(item.attr('placeholder'));
			}
		});
		jqElement.blur();
	}
}

function prepareForms(){
	$('form').each(function(i){
		var item = $(this);
		resetFields(this);
		item.on('submit', function(){
			if(!validateForm(this)){
				return false;
			}
			var article = $('article')[0];
			if(submitFormWithAjax(this, article)){
				return false;
			}
			return true;
		});
	});
}

function isFilled(field){
	if(field.value.replace(' ', '').length == 0){
		return false;
	}
	var placeholder = field.placeholder || field.getAttribute('placeholder');
	return (field.value != placeholder);
}

function isEmail(field){
	return (field.value.indexOf('@') != -1 && field.value.indexOf('.') != -1);
}

function validateForm(whichform){
	for(var i=0; i<whichform.elements.length; i++){
		var element = whichform.elements[i];
		if(element.required == 'required'){
			if(!isFilled(element)){
				alert('Please fill in the '+element.name+' field.');
				return false;
			}
		}
		if(element.type == 'email'){
			if(!isEmail(element)){
				alert('The '+element.name+' field must be a valid email address.');
				return false;
			}
		}
	}
	return true;
}

function displayAjaxLoading(element){
	$(element).empty();//删除所有的子节点（包括文本节点）
	var html = '<img src="../images/loading.gif" alt="Loading..." />';
	$(element).append(html);
}

function submitFormWithAjax(whichform, thetarget){
	displayAjaxLoading(thetarget);
	
	var dataParts = [];
	var element = null;
	for(var i=0; i<whichform.elements.length; i++){
		element = whichform.elements[i];
		dataParts[i] = element.name+'='+encodeURIComponent(element.value);
	}
	var data = dataParts.join('&');
	
	var jqTarget = $(thetarget);
	var url = whichform.getAttribute('action');
	$.ajax({
		type: 'POST',
		url: url,
		data: data,
		dataType: 'text',
		crossDomain: true,
		success: function(data){
			var matches = data.match(/<article>([\s\S]+)<\/article>/);
			if(matches.length > 0){
				jqTarget.html(matches[1]);
			}
		},error: function(statusCode){
			jqTarget.html('<p>'+statusCode+'</p>');
		}
	});
	return true;
}