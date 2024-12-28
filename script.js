// Initialize EmailJS
emailjs.init("B_SCTsf10c4EsDlUq"); // Replace with your public key

document.querySelector("input[type='submit']").addEventListener("click", () => {
    const message = document.getElementById("msg").value.trim();
    const status = document.getElementById("status");
    const hiddenDiv = document.getElementById("hidden-div");

    if (!message) {
        alert("Message cannot be empty!");
        return;
    }

    // Append message to the hidden div
    const newParagraph = document.createElement("p");
    newParagraph.textContent = message;
    hiddenDiv.appendChild(newParagraph);
    hiddenDiv.style.display = "block"; // Show hidden div

    // Send the message via EmailJS
    emailjs.send("service_ec39vzg", "template_a8qi2nj", {
        user_name: "MUNU", // You can customize this
        message: message,
    })
        .then(() => {
            status.textContent = "Message sent successfully!";
            status.style.color = "green";
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            status.textContent = "Failed to send the message.";
            status.style.color = "red";
        });

    // Clear input
    document.getElementById("msg").value = "";
});