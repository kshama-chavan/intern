$(document).ready(function(){
	$("#sbutton").click(function(event){
		
		event.preventDefault();
		console.log("hi!");
		console.log($('#pForm').serialize());
		$.ajax({
				type: "POST",
				url: "./registerForm.php",
				data: $('#pForm').serialize(),
				success: function(data){
					alert(data);
					$('#pForm').trigger("reset");
				}
		});
		
		return false;
	});
		
});