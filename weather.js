$(document).ready(function(){
	
	$('#submitWeather').click(function(){
		
		var city=$("#city").val();
		
		if(city!=''){
			
			$.ajax({
				url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=18ae2a1c6aea8454590ea921c0732d53",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					console.log(data);
				}
			});
			
		}else{
			$("#error").html('field cannot be empty');
		}
			
	});
	
	
});
