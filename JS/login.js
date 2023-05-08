// // login Page
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();
    checkInputs();
});

function checkInputs() {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (usernameValue === "") {
        setErrorFor(usernameInput, "يرجى إدخال اسم المستخدم");
    } else {
        setSuccessFor(usernameInput);
    }

    if (passwordValue === "") {
        setErrorFor(passwordInput, "يرجى إدخال كلمة المرور");
    } else {
        setSuccessFor(passwordInput);
    }

    if (usernameValue !== "" && passwordValue !== "") {
        // redirect to index page
        window.location.href = "./index.html";
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".error-message");
    formControl.className = "form-group error";
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-group success";
}

function clearErrors() {
    usernameError.innerText = "";
    passwordError.innerText = "";
}


// // End Login