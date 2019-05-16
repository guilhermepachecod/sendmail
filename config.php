<?php
/**
 * Set the parameters according to your settings
 * 
 * Change for your information
 */  
define("SMTP_HOST", "smtp.myhostserver.com");  //SMTP server.
define("SMTP_SECURE", "starttls"); //SMTP Secure protocol
define("USERNAME", "no-reply@mydomain.com"); // Sender E-mail account username.
define("PASSWORD", "mypassword"); // Sender e-mail account password
define("SMTP_PORT", "587"); // SMTP configured prot on server. 587 is most common.
define("FROM", "no-reply@mydomain.com"); // Address that appears with sender
define("ADDRESS", "receiver@mydomain.com"); //Receiver's email box
define("ADDNAME", "Contact from site Send Mail"); //Receiver name
define("BCC", "backup@mydomain.com"); //Backup email box
//Defining the message that will be sent in the body of the email
//$txt are from the form box
define("MSG", "Message sent by the form site contact\n\n Contact email: ".$txtmail."\n Name: ".$txtname."\n\n Message:\n ".$txtbody."\n" );

?>
