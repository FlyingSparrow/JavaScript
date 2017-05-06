$(function(){
	stripeTables();
});

function stripeTables(){
	$('table tr:odd').addClass('odd');
}