$(document).ready(function(){
	var updateSpan = function() {
		var n = $('#content').queue().length;
		$('#fxcount').text(n);
	};
	setInterval(updateSpan, 100);
	
	var duration = 1000;
	
	$('#animate').click(function(){
		$('#content').animate(
			{'border-width': 5,
			height: 10},
			duration);
			
		$('#content').animate(
			{width: 10},
			duration);
			
		$('#content').queue(function() {   
			$(this).css('background-color',
				'white');
			$(this).dequeue(); 
		});

		$('#content').fadeOut(duration);
	});
	
	$('#stop').click(function(){
		$('#content').stop(true);
	});	
});
