$(document).ready(function(){
	var updateButtons = function() {
		var hidden = 
			$('#content').is(':hidden');
		$('#hide').attr('disabled', hidden);
		$('#show').attr('disabled', !hidden);
	};
	updateButtons();
	
	var durationValue = function() {
		var duration = $('#duration').val();
		if (jQuery.isNumeric(duration)) {
			return parseInt(duration);
	    } else {
	    	return duration;
	    }
	};
	
	$('#hide').click(function(){
		var duration = durationValue();
		var type = 
		  $('select option:selected').val();
		  
		if (type == 'default') {
			$('#content').hide(
				duration, updateButtons);
		} else if (type == 'fade') {
			$('#content').fadeOut(
				duration, updateButtons);
		} else if (type == 'slide') {
			$('#content').slideUp(
				duration, updateButtons);
		}
	});
	$('#show').click(function(){
		var duration = durationValue();
		var type = 
		  $('select option:selected').val();
		  
		if (type == 'default') {
			$('#content').show(
				duration, updateButtons);
		} else if (type == 'fade') {
			$('#content').fadeIn(
				duration, updateButtons);
		} else if (type == 'slide') {
			$('#content').slideDown(
				duration, updateButtons);
		}
	});
	$('#toggle').click(function(){
		var duration = durationValue();
		var type = 
		  $('select option:selected').val();
		  
		if (type == 'default') {
			$('#content').toggle(
				duration, updateButtons);
		} else if (type == 'fade') {
			$('#content').fadeToggle(
				duration, updateButtons);
		} else if (type == 'slide') {
			$('#content').slideToggle(
				duration, updateButtons);
		}
	});
	$('#stop').click(function(){
		$('#content').stop();
	});
});
