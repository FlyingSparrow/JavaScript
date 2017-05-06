$(function(){
	highlightRows();
});

function highlightRows(){
	$('tr').bind('mouseover', function(){
		$(this).css({'font-weight': 'bold'});
	});
	$('tr').bind('mouseout', function(){
		$(this).css({'font-weight': 'normal'});
	});
}