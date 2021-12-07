<?php
	$username = $_POST['username'];
	$description = $_POST['description'];
	$location = $_POST['location'];

	// Database connection
	$conn = new mysqli('localhost','root','','APDatabase');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(username, description, location) values(?, ?, ?)");
		$stmt->bind_param("sssssi", $username, $description, $location);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}

	$_SESSION['username'] = session_id();
	$_SESSION['password'] = $row->password;


	if(isset($_SESSION['username'])){
		echo "<font color=red>Not logged in : <a href=login.php>Login</a>
		<a href=signup.php>Signup</a> ";
	}
	else{
		echo "font color=green>Welcome $_SESSION[username]";
	}




?>