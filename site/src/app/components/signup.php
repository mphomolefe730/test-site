<?php

include "Connection.php";
$mysqli = new mysqli($host, $username, $password, $database);


if ($mysqli->connect_error) {
    die('Database connection failed: ' . $mysqli->connect_error);
}

function validateForm($data) {
    $errors = [];

    
    if (empty($data['name']) || !preg_match("/^[a-zA-Z ]*$/", $data['name'])) {
        $errors['name'] = 'Name is required and should only contain letters and spaces.';
    }

    
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Email is required and should be a valid email address.';
    }

    
    if (empty($data['password']) || strlen($data['password']) < 8) {
        $errors['password'] = 'Password is required and should be at least 8 characters long.';
    } elseif ($data['password'] !== $data['password_confirmation']) {
        $errors['password_confirmation'] = 'Passwords do not match.';
    }

    return $errors;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
    $errors = validateForm($_POST);

    if (empty($errors)) {
        
        $name = $mysqli->real_escape_string($_POST['name']);
        $email = $mysqli->real_escape_string($_POST['email']);
        $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

       
        $query = "INSERT INTO user (name, email, password_hash) VALUES ('$name', '$email', '$password')";
        if ($mysqli->query($query)) {
            echo 'Registration successful!';
        } else {
            echo 'Error: ' . $mysqli->error;
        }
    }
}


$mysqli->close();
?>





