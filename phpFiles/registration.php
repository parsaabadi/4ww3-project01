<?php
	/*
	Here, we essentially register a user and add it to the database
	APDatabase. We keep a record of all the username email password
	and password2. We connect to the database and in our table registation
	we insert all values to it.
	*/


	// Creating variables, retrieving data from index.html, later will post the data to database
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$password2 = $_POST['password2'];

	// Database connection
	$conn = new mysqli('localhost','root','mcmaster123','APDatabase');
	
	// Checking to see if a connection is made
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		// Inserts data into data base
		$stmt = $conn->prepare("insert into registration(username, email, password, password2) values(?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $username, $email, $password, $password2);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>