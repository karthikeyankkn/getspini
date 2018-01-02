<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['ph_number'];
// $subject = $_POST['Subject'];
// $message = $_POST['Message'];
 
$to = 'karthikeyan@spinircle.com';
$subject = 'the subject';
$message = 'FROM: '.$name.'  Email: '.$email.'  Phone: '.$phone;
$headers = 'From: sales@getspini.com' . "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Your email was sent!"; // success message
}else{
echo "Invalid Email!";
}

 ?>
