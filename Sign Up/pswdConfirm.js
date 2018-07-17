$(document).ready(function(){
	$('#sbutton').click(function(){
		var password=$('#password').val();
		var confirmPassword=$('#confirmPassword').val();
		if(password != confirmPassword){
			alert("Password doesnot match!");
			return false;
		}
		return true;
	});
});