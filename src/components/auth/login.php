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

$sql = "SELECT * FROM users where username='$username'";
$result = $conn->query($sql);
$row=$result->fetch_assoc();

if ($result->num_rows > 0) {
  // output data of each row
  
  
  if($row['username'] == $username && password_verify($password, $row['password']))
  {
      echo json_encode(["status" => 200, ]);     
  }
  else
  {
    echo json_encode(["status" => 400, ]);
  }
}
else
{
  echo json_encode(["status" => 400, ]);
}


$conn->close();


?>