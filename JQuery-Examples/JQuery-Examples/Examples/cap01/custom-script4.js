$(document).ready(function(){
	$("a").click(function(event){
		$("blockquote").toggle('slow');
		event.preventDefault();
    });
});
