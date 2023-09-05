<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "har";

$mysqli = new mysqli($host, $username, $password, $dbname);

if($mysqli->connect_error){
    die("connection error". $mysqli->connect_error);


}
if ($mysqli->connect_error) {
    die('Database connection failed: ' . $mysqli->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $mysqli->real_escape_string($_POST['email']);
    $password = $_POST['password'];


    $query = "SELECT id, email, password FROM user WHERE email = '$email'";
    $result = $mysqli->query($query);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();

        
        if (password_verify($password, $row['password'])) {
            
            session_start();
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_email'] = $row['email'];
            
            
            header('Location: dashboard.php');
            exit;
        } else {
            echo 'Invalid password';
        }
    } else {
        echo 'User not found';
    }
}


$mysqli->close();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>
<body>

    <form action="" method="post">
        
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
        </div>
        
        <button type="submit">login</button>
    </form>
    
    
</body>
</html>