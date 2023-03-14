function validatePassword() {

    // Get the password input element
    var password = document.getElementById("password");

    // Define the regular expression for a strong password
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if the password matches the regex
    if (regex.test(password.value)) {

        // If yes, set the border color to green
        password.style.borderColor = "green";
    } else {

        // If no, set the border color to red and alert the user
        password.style.borderColor = "red";
        alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit and one special character.");
    }
}