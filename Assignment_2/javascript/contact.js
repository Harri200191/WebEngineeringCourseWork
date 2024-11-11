document.getElementById("submitBtn").addEventListener("click", function () {
    // Form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const petType = document.getElementById("petType");

    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const petTypeError = document.getElementById("petTypeError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    petTypeError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Phone number validation
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = "Phone number must contain only digits.";
        isValid = false;
    }

    // Pet type validation
    if (petType.value === "") {
        petTypeError.textContent = "Please select a pet type.";
        isValid = false;
    }

    // Display success message if valid
    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
    }
});
