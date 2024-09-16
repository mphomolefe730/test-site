<?php

if(isset($_POST["subscribe"])){
 
    $UserEmail = $_POST["email"];

    if(filter_var($UserEmail, FILTER_VALIDATE_EMAIL)){
        $subject = "Thank you for subscribing to us";
        $message = "Thank you for subscribing to our website, you'll receive daily emails from the team.";
        $sender = "travelvista23"; //we need to create an email for the website

        if(mail($UserEmail, $subject, $message, $sender)){
            echo "Thank you for subscribing";
        } else {
            echo "Failed to send email";
        }
    } else {
        echo "Your email is incorrect";
    }
}

?>
