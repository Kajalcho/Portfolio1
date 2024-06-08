document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "YouTuber", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const dobInput = document.getElementById("dob");
    const errorMessage = document.getElementById("error-message");

    contactForm.addEventListener("submit", function (event) {
        // Validate name: Only letters and spaces allowed
        if (!validateName(nameInput.value)) {
            event.preventDefault();
            errorMessage.textContent = "Please enter a valid name (letters and spaces only).";
        }

        // Validate email format
        if (!validateEmail(emailInput.value)) {
            event.preventDefault();
            errorMessage.textContent = "Please enter a valid email address.";
        }

        // Validate phone number: Only digits allowed
        if (!validatePhoneNumber(dobInput.value)) {
            event.preventDefault();
            errorMessage.textContent = "Please enter a valid phone number (digits only).";
        }

        // Check if any of the fields are empty
        if (!nameInput.value || !emailInput.value || !dobInput.value) {
            event.preventDefault();
            errorMessage.textContent = "Please fill in all fields correctly.";
        } else {
            // Clear the error message if all fields are valid
            errorMessage.textContent = "";
        }
    });

    function validateName(name) {
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(name);
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    function validatePhoneNumber(phoneNumber) {
        const regex = /^\d+$/;
        return regex.test(phoneNumber);
    }
});


