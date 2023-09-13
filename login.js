function login() {
    // Get the entered username and password
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    // Check if the entered username and password match those in local storage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Redirect to school.html with the username as a query parameter
        window.location.href = "school.html?username=" + enteredUsername;
        return false; // Prevent the form from submitting
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent the form from submitting
    }
}
