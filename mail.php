<?php

$name =$_POST['name'];
$email =$_POST['email'];
$number =$_POST['number'];
$subject =$_POST['subject'];
$message =$_POST['message'];

$to = "hoquesahjul@gmail.com";
$subject = "$subject";


$headers = "From: ".$name."\r\n".
"cc:sahjulhq@gmail.com";

$txt = ".$subject".$name."\r\nEmail:'.$email."\r\n 
Message: "$message;

if($email!=NULL){
mail($to, $email, $subject, $number, $message);
}

header('Location:thankyou.html');




?>