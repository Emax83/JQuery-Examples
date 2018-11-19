$(document).ready(function(){
	$('#animate1').click(function(){
		$('#content').animate(
			{'border-width': 5,
			height: 10});
	});
	$('#animate2').click(function(){
		$('#content').animate(
			{width: 10},
			'slow');
	});
});
