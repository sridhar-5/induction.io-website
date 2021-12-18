<?php

$email = $_POST['email'];
$sender_name = 'GDSC SPAMMER';
$sender_email = 'spamfromsridhar@gdsc.com';
$subject = 'Spam Mail from GDSC';
$headers = "From: $sender_name" . "<" . $sender_email . ">\r\n";

$content = 
"Hello Reader, \n This is a spam mail from GDSC. \n\n Regards, \n GDSC Team";

echo "Done..!";
if (!isset($_POST['checking'])){
    for($i=0;$i<5;$i++){
        mail($email, $subject, $content, $headers);
        echo "sent";
    }
}


?>