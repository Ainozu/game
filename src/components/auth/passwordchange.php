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
$passwordold=$_POST['password_old'];
$passwordnew=$_POST['password_new'];

$sql = "SELECT * FROM users where username='$username'";
$result = $conn->query($sql);
$row=$result->fetch_assoc();



if ($result->num_rows > 0) {
  // output data of each row
  
  
  if(password_verify($passwordold, $row['password']))
  {
       if ($passwordnew==$passwordold)
       {
        echo json_encode(["status" => 401, ]); 
       }
       else
       {
        $passwordnew=password_hash($passwordnew,PASSWORD_DEFAULT);
        $sql = "UPDATE game.users SET password = '$passwordnew' where username='$username'";
        $conn->query($sql);
        
        echo json_encode(["status" =>200,]);

       }
  }
  else
  {
    echo json_encode(["status" => 400, ]);
  }
}



$conn->close();


?>