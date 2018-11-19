$().ready(function() {
	//aggiunge validazione in uscita dal
	//campo nome utente
	$('#user_field').blur( function() {
		if ($(this).val()) {
			validate_user();
		}
	} );

	//precarica immagini
	preloadImages(
		"16-em-check.png",
		"16-em-cross.png");
	
	// imposta il fuoco al primo campo	
	$("input:text:visible:first").focus();
});

// cache immagini
var imagesCache = [];

function preloadImages() {
	var args_len = arguments.length;
	for (var i = args_len; i--;) {
		var cacheImage = 
		  document.createElement('img');
		cacheImage.src = arguments[i];
		imagesCache.push(cacheImage);
	}
};

function validate_user() {
	setWaitingIcon("user");
		
	check( 
		"user", 
		"ID utente gi&agrave; utilizzato" );
}

function check(fieldId, errorMessage) {
	var fieldValue = 
		$("#" + fieldId + "_field").val();
		
	setError(fieldId, "");
	
	$.post(
		"check.php", 
		{"fieldId": fieldId,
		 "fieldValue": fieldValue}
	).success( function(data) {
		if (data == 'OK') {
			setResultIcon(fieldId, true);
		} else {
			setResultIcon(fieldId, false);
			setError(fieldId, errorMessage);
		}		
	} );		 
}

function setWaitingIcon(fieldId) {
	var id = getIconIdForField(fieldId);
	$(id).attr('src', 'ajax-loader.gif');
}

function getIconIdForField(fieldId) {
	return "#" + fieldId + "_icon";
}

function setResultIcon(fieldId, passed) {	
	var id = getIconIdForField(fieldId);
	var icon;
	
	if (passed) {
		$(id).attr('src', '16-em-check.png');
	} else {
		$(id).attr('src', '16-em-cross.png');
	}
}

function setError(fieldId, message) {
	if (message == '') {
		$("#" + fieldId + "_field")
			.css('background-color', 
			     'white');
			     
		$("#" + fieldId + "_message")
			.html(message)
			.removeClass("error");
	} else {
		$("#" + fieldId + "_field")
			.css('background-color', 
			     '#F2DDB6');
			     
		$("#" + fieldId + "_message")
			.html(message)
			.addClass("error");
	}	
}