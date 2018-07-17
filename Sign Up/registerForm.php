<?php

$email = $_POST['email'];
$password = $_POST['psw'];
 if(!empty($email) || !empty($password)){
	 $host= "localhost";
	 $dbusername="user";
	 $dbpassword="";
	 $dbname="internship";
	 
	 $conn = new mysqli($host,$dbusername,$dbpassword,$dbname);	 
	 if (mysqli_connect_error()){		
		die('Connect Error('.mysqli_connect_error() .')'. mysqli_connect_error());
	}else{
		$sql = "INSERT INTO  users VALUES('$email','$password')";
		if($conn->query($sql)){
			echo "New record is inserted successfully";
		}else{
			echo "Error: ". $sql ."<br>". $conn->error;
		}
		$conn->close();
	}
}else{
	echo "Fields should not be empty";
	die();
}
?> 