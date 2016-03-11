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
console.log('P')
$.ajax({
	method: 'GET',
	url: 'http://api.wunderground.com/api/b325241e6545289b/conditions/q/CA/Culver_City.json',
	data: JSON.stringify({response:$('#weatherTemp').val() }),
	dataType : "jsonp"
}).then(
	function( response ) {
		console.log('are we there yet?', response );
		// var location = JSON.stringify({response:$('display_location','full', 'local_time_rfc822')});
  // 		var temp_f = JSON.stringify({response:$('current_observation','temp_f','weather').val() });
  		// var $weatherTemp = $(response).filter('#weatherTemp');
  		var location = response.current_observation.display_location.full;
  		var temp_f = response.current_observation.temp_f;
  		var time = response.current_observation.observation_time_rfc822;
  		var forecast = response.current_observation.weather;
		$( '#weatherTime' ).html( 'Today is '  + time + '.');
		$( '#weatherTemp' ).html( "Currently it's " + temp_f + 'F' + ' in ' + location + '.');
		$( '#forecast' ).html( "Today's forecast: " + forecast);
		
	}	
)


// var api_endpoint = "http://api.wunderground.com/api/b325241e6545289b/conditions/q/CA/Culver_City.json"
// $.get(api_endpoint)
//  .success(renderWeather)
//  .fail(function(){
//  	alert("Whoa, major problemo with the api!")
//  });
