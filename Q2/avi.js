
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    const message = document.getElementById("message");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    message.textContent = "";
    message.className = "";

    let isValid = true;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email, e.g. name@example.com";
        isValid = false;
    }

    if (password.length < 6 || !/[0-9]/.test(password)) {
        passwordError.textContent = "Use 6+ characters including a number.";
        isValid = false;
    }

    if (confirmPassword !== password || confirmPassword === "") {
        confirmError.textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        message.textContent = "Registration successful! Welcome, " + name + ".";
        message.className = "success";
        form.reset();
    }

});
