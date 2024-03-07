<?php
// Define the list of valid postal codes
$validPostalCodes = array("A1A 1A1", "B2B 2B2", "C3C 3C3");

// Get the entered postal code from the form
$postalCode = $_POST['postalCode'];

// Print out the received postal code for debugging
echo "Received postal code: $postalCode<br>";

// Check if the entered postal code exists in the list
if (in_array($postalCode, $validPostalCodes)) {
    echo "Success: Postal code found in the list.";
} else {
    echo "Error: Postal code not found in the list.";
}
?>
