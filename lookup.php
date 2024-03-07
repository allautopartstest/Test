<?php
// Define the list of valid postal codes
$validPostalCodes = array("A1A 1A1", "B2B 2B2", "C3C 3C3");

// Get the entered postal code from the form
$postalCode = $_POST['postalCode'];

// Log the received postal code to a file for debugging
file_put_contents('debug.log', "Received postal code: $postalCode\n", FILE_APPEND);

// Check if the entered postal code exists in the list
if (in_array($postalCode, $validPostalCodes)) {
    echo "Success: Postal code found in the list.";
} else {
    echo "Error: Postal code not found in the list.";
}
?>
