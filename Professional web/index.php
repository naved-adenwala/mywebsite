<?php

$server = "localhost";
$username = "root";
$password = "";

$connection = mysqli($server,$username,$password);

if(!$connection){
    die("Fail to connect",mysqli_connect_error());
}


$name = $_POST["name"];
$age = $_POST["age"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$gender = $_POST["gender"];
$message = $_POST["message"];


$sql = INSERT INTO `contacts` (`name`, `age`, `phone`, `email`, `gender`, `message`, `date`) VALUES ('$name', '$age', '$phone', '$email', '$gender ', '$message', current_timestamp());


if($connection->query($sql) == true){
    echo "Successfully inserted";
}
else{
    echo "Error: $sql <br> $connection->error";
}

$connection->close()


?>