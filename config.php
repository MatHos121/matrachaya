<?php
$host = 'localhost';  // Your MySQL host (usually localhost)
$dbname = 'hospital_db';  // The database name
$username = 'root';  // Your MySQL username
$password = '';  // Your MySQL password (leave blank if none)

try {
    // Create a new PDO instance for database connection
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully"; // Uncomment this to check if connection is successful
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
