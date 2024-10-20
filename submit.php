<?php
// Include the database configuration file
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $full_name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);
    $appointment_date = htmlspecialchars($_POST['date']);
    $message = htmlspecialchars($_POST['message']);

    // Insert the form data into the database
    try {
        // Prepare an SQL statement for inserting the data
        $sql = "INSERT INTO appointments (full_name, email, phone, service, appointment_date, message) 
                VALUES (:full_name, :email, :phone, :service, :appointment_date, :message)";
        
        // Bind the parameters
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':full_name', $full_name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':service', $service);
        $stmt->bindParam(':appointment_date', $appointment_date);
        $stmt->bindParam(':message', $message);
        
        // Execute the query
        $stmt->execute();

        // Success message
        echo "Thank you, $full_name! Your appointment request for $service on $appointment_date has been received. We will contact you soon.";

    } catch (PDOException $e) {
        // If there is an error, display it
        echo "Error: " . $e->getMessage();
    }

    // Close the database connection
    $conn = null;
}
?>
