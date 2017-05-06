$(function(){
	convertToGS($('#avatar'));
});

function convertToGS(img){
	//如果浏览器不支持<canvas>就返回
	if(!Modernizr.canvas){
		return;
	}
	//存储原始的彩色版
	img.attr('color', img.attr('src'));
	
	//创建灰度版
	img.attr('grayscale', createGSCanvas(img[0]));
	
	//在mouseover/out事件发生时切换图片
	img.bind('mouseover', function(){
		var currentImg = $(this);
		currentImg.attr('src', currentImg.attr('color'));
	});
	img.bind('mouseout', function(){
		var currentImg = $(this);
		currentImg.attr('src', currentImg.attr('grayscale'));
	});
	
	img.mouseout();
}

function createGSCanvas(img){
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	var imgWidth = img.width;
	var imgHeight = img.height;
	
	//注意：getImageData只能操作与脚本位于同一个域中的图片
	var c = ctx.getImageData(0, 0, imgWidth, imgHeight);
	for(var i=0; i<c.height; i++){
		for(var j=0; j<c.width; j++){
			var x = (i*4)*c.width+(j*4);
			var r = c.data[x];
			var g = c.data[x+1];
			var b = c.data[x+2];
			c.data[x] = c.data[x+1] = c.data[x+2] = (r+g+b)/3;
		}
	}
	
	ctx.putImageData(c, 0, 0, 0, 0, c.width, c.height);
	
	return canvas.toDataURL();
}