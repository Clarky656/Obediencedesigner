document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    try {
        let response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            document.getElementById("responseMessage").textContent = "Thank you! Your message has been sent.";
            document.getElementById("responseMessage").style.color = "green";
            form.reset();
        } else {
            document.getElementById("responseMessage").textContent = "Oops! Something went wrong.";
            document.getElementById("responseMessage").style.color = "red";
        }
    } catch (error) {
        document.getElementById("responseMessage").textContent = "Error connecting to the server.";
        document.getElementById("responseMessage").style.color = "red";
    }
});

