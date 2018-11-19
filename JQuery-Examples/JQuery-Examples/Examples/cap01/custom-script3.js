$(document).ready(function(){
	$("a").click(function(event){
		$("blockquote").toggleClass("evidenziato");
		event.preventDefault();
    });
});
