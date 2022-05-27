<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$conn = new mysqli("localhost", "root", "", "game");
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$username=$_POST['username'];
$password=$_POST['password'];
$password=password_hash($password,PASSWORD_DEFAULT);

$sql = "SELECT COUNT(id) AS 'count' FROM users where username='$username'";
$result = $conn->query($sql);
$row=$result->fetch_assoc();
$count=$row['count'];

if ($count == 0 && $username!=null &&$password!=null) {
    $sql = "INSERT INTO users (username, password) VALUES ('$username','$password')";
    $conn->query($sql);
    echo json_encode(["status" => 200, ]);
}
else {
    echo json_encode(["status" => 400, ]);    
}


$conn->close();


?>