var textPages = new Array();
var maxPages = 5;
var requestedPage;

$().ready(function() {
	showPage(1);
});

function loadPage(id) {
	var url = "page.php";
	var data = { "id": id };
	
	$("#tempPage").load(url, data, 
		function(responseText, textStatus, 
				oXHR) {
				
			if (textStatus=="error") {
				if (id == requestedPage) {
					setError("Errore: " + 
						oXHR.status + 
						" " + 
						oXHR.statusText);
				}
					
				hideWaiter();
			} else {
				textPages[id] = responseText;
			
				if (id == requestedPage) {
					showPage(id);
				}
			}
		}
	);
}

function setError(s) {
	$("#error").html(s);
	if (s == null) {
		$("#error").hide(s);
	} else {
		$("#error").show(s);
	}
}

function hideWaiter() {	
	$("#waiter").hide();
}

function showWaiter() {	
	$("#waiter").show();
	$("#textPage").hide();
}

function showPage(id) {
	if (textPages[id] == null) {
		showWaiter();
		setError(null);
		
		if (requestedPage != id) {
			requestedPage = id;			
			loadPage(id);
		}
	} else {
		hideWaiter();
		setError(null);
		
		$("#textPage").html(textPages[id]);
		$("#textPage").show();

		highlightPageNumber(id);
		
		var nextPage = id + 1;
		
		if (nextPage <= maxPages && 
			textPages[nextPage] == null) {
			
			loadPage(nextPage);
		}
	}
}

function highlightPageNumber(id) {
	for (i = 1; i <= maxPages; i++) {
		var w = "normal";
		if (i == id) {
			w = "bold";
		}
		$("#p" + i).css("font-weight", w);
	}
}