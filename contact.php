<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        include_once 'db_Con.php';

        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        $result = mysqli_query($conn,"INSERT INTO contact(client_name,client_email,client_msg) VALUES ('".$name."','".$email."', '".$message."')");
        if($result){
            echo "Thank You! Your message has been sent.";
        }
        else{
            echo "Oops! Something went wrong and we couldn't send your message.";
         }
    }

?>