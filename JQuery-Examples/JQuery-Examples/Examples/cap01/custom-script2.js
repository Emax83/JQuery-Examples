$(document).ready(function(){
	$("a").click(function(event){
		$("blockquote").addClass("evidenziato");
		event.preventDefault();
    });
});
