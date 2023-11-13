function attemptLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Send the username and password to the server for validation
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("message").innerHTML = "Login successful!";
        } else {
            document.getElementById("message").innerHTML = "Login failed. Please check your credentials.";
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
