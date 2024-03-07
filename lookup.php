<?php
// Define an array of valid postal codes
$validPostalCodes = array("A1A 1A1", "B2B 2B2", "C3C 3C3");

// Retrieve the submitted postal code from the POST request
$submittedPostalCode = $_POST["postalCode"];

// Check if the submitted postal code exists in the array
if (in_array($submittedPostalCode, $validPostalCodes)) {
    echo "Postal code found!";
} else {
    echo "Postal code not found.";
}
?>
