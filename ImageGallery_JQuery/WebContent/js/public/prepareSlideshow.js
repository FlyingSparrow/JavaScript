$(function(){
	prepareSlideshow();
});

function prepareSlideshow(){
	//确保元素存在
	if(!$('#linklist')){
		return false;
	}
	
	var html = '<div id="slideshow"><img src="../images/topics.gif"'
		+' alt="building blocks of web design" id="preview"'
		+' style="width: 400px; height: 100px;" /></div>';
	
	//取得列表中的所有链接
	var list = $('#linklist');
	list.append(html);
	//为mouseover事件添加动画效果
	list.find('a').each(function(i){
		$(this).bind('mouseover', function(){
			var dist = (i+1)*-100;
			moveElement('#preview', dist, 0, 10);
		});
	});
}