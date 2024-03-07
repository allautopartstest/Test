document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("postalCodeForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var postalCode = document.getElementById("postalCodeInput").value;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "lookup.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById("result").textContent = xhr.responseText;
            } else {
                console.error("Request failed. Status: " + xhr.status);
            }
        };

        xhr.send("postalCode=" + encodeURIComponent(postalCode));
    });
});
