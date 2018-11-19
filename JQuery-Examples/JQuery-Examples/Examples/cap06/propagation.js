$(document).ready(function(){
	$('p').click(function(){
		alert("Clicc su <p>");
		return false;
	});
	$('#content').click(function(){
		alert("Clic su #content");
	});
});
