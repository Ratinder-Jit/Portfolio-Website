document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        message.innerHTML = "";

        const firstName = form.getElementById("firstName").value.trim();
        const lastName = form.getElementById("lastName").value.trim();
        const phoneNumber = form.getElementById("phoneNumber").value.trim();
        const email = form.getElementById("email").value.trim();
        const feedback = form.getElementById("feedback").value.trim();

        if (firstName === "") {
            displayErrorMessage("First Name cannot be empty.");
            return;
        }

        if (lastName === "") {
            displayErrorMessage("Last Name cannot be empty.");
            return;
        }

        if (phoneNumber > 10) {
            displayErrorMessage("Phone Number should be 10 digits.");
            return;
        }

        if (!email.endsWith("@dal.ca")) {
            displayErrorMessage("Email must end with '@dal.ca'.");
            return;
        }

        if (feedback === "") {
            displayErrorMessage("Feedback cannot be empty.");
            return;
        }

        message.innerHTML = "<p>Form submitted successfully!</p>";
        form.reset();
    });

    function displayErrorMessage(message) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        message.appendChild(errorMessage);
    }
});
