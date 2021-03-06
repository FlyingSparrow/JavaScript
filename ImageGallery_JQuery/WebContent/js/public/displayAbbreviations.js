$(function(){
	displayAbbreviations();
	displayAbbreviationsWithTemplate();
});

function displayAbbreviations(){
	//取得所有缩略词
	var abbreviations = $('abbr');
	if(abbreviations.length < 1){
		return false;
	}
	var defs = new Array();
	
	//遍历这些缩略词
	abbreviations.each(function(i){
		var abbr = $(this);
		if(abbr.contents().length > 0){
			var definition = abbr.attr('title');
			var key = abbr.text();
			defs[key] = definition;
		}
	});
	
	//创建定义列表
	var html = '';
	//loop through the definitions
	for(key in defs){
		var definition = defs[key];
		//创建定义标题
		html += '<dt>'+key+'</dt><dd>'+definition+'</dd>';
	}
	
	if(html.length < 1){
		return false;
	}
	
	//把标题添加到页面主体
	$('body').append('<h2>Abbreviations</h2>');
	//把定义列表添加到页面主体
	$('body').append('<dl>'+html+'</dl>');
}

/**
 * 使用JQuery Template插件实现添加定义列表
 * 说明：未完成
 * @returns
 */
function displayAbbreviationsWithTemplate(){
	//创建缩写词数组
	var data = $('abbr').map(function(){
		return {
			desc:$(this).attr('title'),
			term:$(this).text()
		};
	}).toArray();
	console.log(data);
	//添加到文档并应用模板
	
}