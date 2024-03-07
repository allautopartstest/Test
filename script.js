function lookupPostalCode() {
  var postalCode = document.getElementById("postalCode").value.toUpperCase();
  var postalCodes = ["A1A 1A1", "B2B 2B2", "C3C 3C3"]; // Sample postal codes
  
  var found = false;
  for (var i = 0; i < postalCodes.length; i++) {
    if (postalCode === postalCodes[i]) {
      found = true;
      break;
    }
  }
  
  if (found) {
    document.getElementById("result").innerHTML = "Postal code found: " + postalCode;
  } else {
    document.getElementById("result").innerHTML = "Postal code not found: " + postalCode;
  }
}

