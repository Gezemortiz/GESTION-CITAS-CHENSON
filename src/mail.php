<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


//Load Composer's autoloader (created by composer, not included with PHPMailer)
//require 'vendor/autoload.php';

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
echo "hola 1";

try {

    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    //$mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ldsw.cuenta.temporal@gmail.com';       //SMTP username
    $mail->Password   = 'gkpfmfctxyutwlce';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('ldsw.cuenta.temporal@gmail.com', 'Mailer');
    $mail->addReplyTo('ldsw.cuenta.temporal@gmail.com', 'Information');

    //$mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
    $mail->addAddress($_POST["correo"]);               //Name is optional
 
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Este es el tema';
    $mail->Body    = $_POST["mensaje"];
    $mail->AltBody = 'Este en texto plano si no hay soporte de HTML en el correo';

    $mail->send();
    echo 'Message has been sent';
    echo $_POST["correo"];
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
