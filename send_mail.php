<?php
/* Namespace alias. */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

/*
Use require to setup de PhpMailer files.
see more in https://github.com/PHPMailer/PHPMailer
In our case we will use the minimum necessary to send the messages 
with SMTP
*/
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

//Use json_decode to decode the information that .post 
//sent in json format

$newMaildata = json_decode(file_get_contents('php://input'));
$mail = new PHPMailer(true);

//taking the values from the fields
$txtname = $newMaildata[0]->txtname;
$txtmail = $newMaildata[0]->txtmail;
$txtsub = $newMaildata[0]->txtsub;
$txtbody = $newMaildata[0]->txtbody;

include_once 'config.php'; 

try {
   
  
   /* SMTP parameters. */
   
   /* Tells PHPMailer to use SMTP. */
   $mail->isSMTP();
   
   /* SMTP server address. */
   $mail->Host = SMTP_HOST;

   /* Use SMTP authentication. */
   $mail->SMTPAuth = true;
   
   /* Set the encryption system. */
   $mail->SMTPSecure = SMTP_SECURE;
   
   /* SMTP authentication username. */
   $mail->Username = USERNAME;
   
   /* SMTP authentication password. */
   $mail->Password = PASSWORD;
   
   /* Set the SMTP port. */
   $mail->Port = 587;
   
   $from = '=?UTF-8?B?'.base64_encode('Site Form').'?=';
   $mail->setFrom(FROM, $from);
   $mail->addAddress(ADDRESS, ADDNAME);
   $mail->addBCC(BCC);
   $txtsub = '=?UTF-8?B?'.base64_encode($txtsub).'?=';
   $mail->Subject = $txtsub;
   $mail->Body = mb_convert_encoding(MSG , "ISO-8859-1");
    
    $mail->send();
    //returns to javascript function if passed successfully
	echo '[{"PASS":"OK"}]';
} catch (Exception $e) {
	//returns to javascript function if passed with error
	echo '[{"PASS":"ERR","ERRINFO":"'.$mail->ErrorInfo.'"}]';
}
?>

