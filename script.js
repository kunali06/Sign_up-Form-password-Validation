const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const confirmError = document.getElementById("confirmError");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = passwordInput.value;
  if (password === "") {
    passError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passError.textContent = "Password must be at least 6 characters";
    isValid = false;
  } else if (
    !password.match(/[0-9]/) ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/)
  ) {
    passError.textContent =
      "Password must include upper, lower & number";
    isValid = false;
  } else {
    passError.textContent = "";
  }

  // Confirm password
  if (confirmPasswordInput.value === "") {
    confirmError.textContent = "Please confirm password";
    isValid = false;
  } else if (confirmPasswordInput.value !== password) {
    confirmError.textContent = "Passwords do not match";
    isValid = false;
  } else {
    confirmError.textContent = "";
  }

  if (isValid) {
    alert("Signup Successful 🎉");
    form.reset();
  }
});
