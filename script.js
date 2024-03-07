document.getElementById("lookupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered postal code
    var postalCode = document.getElementById("postalCode").value;

    // Send a POST request to the PHP script
    fetch("lookup.php", {
        method: "POST",
        body: new URLSearchParams({
            postalCode: postalCode
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.text())
    .then(data => {
        // Display the result in the HTML element
        document.getElementById("result").innerText = data;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
