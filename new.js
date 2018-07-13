$(document).ready(function(){ 
	$("#b").click(function(){ 
		alert("First Name:"+$("#i1").val()+"\nLast Name:"+$("#i2").val()+"\nTelephone:"+$("#i3").val()+"\nEmail ID:"+$("#i4").val()+"\nAddress:"+$("#i5").val());
		
	});
	$("#b1").click(function(){
		$("#p").hide();
	});
	$("#b2").click(function(){
		$("#p").show();
	});
	$("#b3").click(function(){
		$("#p1").toggle();
	});
});