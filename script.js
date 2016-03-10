$( document ).ready(function(){
	$( "img#fade" ).hover(function(){
		$( this ).fadeOut( 1000 );
		$( this ).fadeIn ( 1000 );
	});
});

$( document ).ready( function(){
	$( "#ga p").hide();
	$( "#ga h2").click( function(){
		$( "#ga p" ).slideToggle( "slow" );
	})
})

$( document ).ready( function(){
	$(".col-lg-4 #ga1").hover(function(){
		console.log("damn thing rotate")
		$(".col-lg-4 #ga1").addClass("rotate1")
	})
})

$( document ).ready( function(){
	$(".col-lg-4 #ga2").hover(function(){
		console.log("damn thing rotate")
		$(".col-lg-4 #ga2").addClass("rotate2")
	})
})

$( document ).ready( function(){
	$(".col-lg-4 #mem").hover(function(){
		console.log("damn thing rotate")
		$(".col-lg-4 #mem").addClass("rotate3")
	})
})

$.ajax({
	url: "http://api.wunderground.com/api/b325241e6545289b/conditions/q/CA/Culver_City.json",
	data: {
		zipcode: 90232
	},
	success: function( data ) {
		$( "#weatherTemp").html( "<strong>" + data + "<strong> degrees");
	}
});
