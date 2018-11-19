$().ready(function() {
	hideSuggestions();
	
	$("#image_tag").keyup( function(event) {
		var text = $(this).val();
		
		if (event.which == 13) {
			addTag(text);
		} else {
			if (text.length > 0) {
				search(text);
			} else {
				hideSuggestions();
			}
		}
		
		event.preventDefault();
	});
	
	// imposta il fuoco sul campo di testo
	$("#image_tag").focus();	
});


function search(text) {
	$.getJSON(
		"suggest.php", 
		{ "search": text },
		function(data) {
			parseData(data.result);
		}
	);
}

function parseData(list) {
	var html = "";
	for (i = 0; i < list.length; i++) {
		html += 
			"<a href=\"javascript:addTag('" + 
			list[i] + 
			"');\">" + 
			list[i] + 
			"</a><br/>";
	}
	
	$('#suggestions').html(html);

	if (list.length != 0) {
		showSuggestions();
	} else {
		hideSuggestions();
	}
}

function showSuggestions() {
	$("#suggestions").show();
}

function hideSuggestions() {
	$("#suggestions").hide();
}
function addTag(text) {
	var o = $('<span class="tag">' + 
				text + 
				'</span>');
	$("#tags").append(o);
	$(".tag:last").click(function() {
		$(this).fadeOut('fast', function() {
			$(this).remove();			
		});
	});
	
	hideSuggestions();
	$("#image_tag").val('');
}