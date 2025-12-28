function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");

    let userMessage = input.value.trim();
    if (userMessage === "") return;

    // Show user message
    chatBody.innerHTML += `<p><b>You:</b> ${userMessage}</p>`;

    let botMessage = getBotReply(userMessage);

    // Show bot message
    setTimeout(() => {
        chatBody.innerHTML += `<p><b>Bot:</b> ${botMessage}</p>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);

    input.value = "";
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello 👋 How can I help you with insurance today?";
    }
    else if (message.includes("insurance")) {
        return "We provide Life, Health, and Vehicle Insurance services.";
    }
    else if (message.includes("life")) {
        return "Life Insurance secures your family's future financially.";
    }
    else if (message.includes("health")) {
        return "Health Insurance covers medical and hospital expenses.";
    }
    else if (message.includes("vehicle")) {
        return "Vehicle Insurance protects your car or bike from damage and loss.";
    }
    else if (message.includes("price") || message.includes("cost")) {
        return "Insurance cost depends on plan type. Please contact our agent.";
    }
    else if (message.includes("contact")) {
        return "You can contact us at support@securelife.com or call +91 9876543210.";
    }
    else if (message.includes("thank")) {
        return "You're welcome 😊 Stay safe with SecureLife Insurance!";
    }
    else {
        return "Sorry, I didn’t understand that. Please ask about insurance services.";
    }
}
