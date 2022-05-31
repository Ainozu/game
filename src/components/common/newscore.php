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
$set=$_POST['set'];
$time=$_POST['time'];
if (!empty($username)) {
    $sql = "INSERT INTO scores (user,gameset,time) VALUES ('$username','$set','$time')";
}

$conn->query($sql);


$conn->close();


?>