$( document ).ready(function(){
	$( "img#fade" ).hover(function(){
		$( this ).fadeOut( 1000 );
		$( this ).fadeIn ( 1000 );
	});
});

$( document ).ready(function(){
	$( "#ga p").hide()
	$( "#ga h2" ).click(function(){
		$( "#ga p" ).show();
	    $( this ).animate({
			height: 70,
			width: 400,
		}, 1000, "linear", function(){
			
		})

	})

})
