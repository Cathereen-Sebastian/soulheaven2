document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (email.trim() !== "" && password.trim() !== "") {
                alert("Login successful!"); // Keeping feedback instead of redirection
            } else {
                alert("Please enter both email and password.");
            }
        });
    } else {
        console.error("Login form not found!");
    }
});
