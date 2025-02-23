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

function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (!userInput.trim()) return;

    let chatBox = document.getElementById("chatBox");

    // Add user message
    let userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Auto-scroll chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Get bot response
    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        let botMessage = document.createElement("p");
        botMessage.className = "bot-message";
        botMessage.textContent = botResponse;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    document.getElementById("userInput").value = "";
}

// Predefined chatbot responses
function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("price")) return "Our jerseys start at $20. Custom designs may cost extra.";
    if (input.includes("size")) return "We offer sizes S, M, L, and XL.";
    if (input.includes("color")) return "You can choose any color using our customizer!";
    if (input.includes("delivery")) return "Delivery usually takes 5-7 business days.";
    return "I'm not sure. Please contact support!";
}

});

