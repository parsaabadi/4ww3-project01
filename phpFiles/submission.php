<?php

use GuzzleHttp\Psr7\Stream;
use Aws\S3\S3Client;
require 'phpFiles/start.php';

if(isset($_FILES['file'])){

$file = $_FILES['file'];
$name = $file['name'];

$stream = new \GuzzleHttp\Psr7\Stream(fopen('php://input', 'r'));

$result = $s3->putObject(array(
            'Bucket' => $config['s3']['bucket'],
            'Key' => "uploads/{$name}",
            'ContentLength' => (int)$_SERVER['CONTENT_LENGTH'],
            'Body' => $stream,
            'ACL' => 'private',
            'StorageClass' => 'STANDARD_IA',


        ));

    }




	// Creating variables, retrieving data from index.html, later will post the data to database

	$username = $_POST['username'];
	$description = $_POST['description'];
	$location = $_POST['location'];

	// Database connection
	$conn = new mysqli('localhost','root','mcmaster123','APDatabase');
	// Checking to see if a connection is made
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		// Inserts data into data base
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