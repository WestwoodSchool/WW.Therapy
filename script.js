async function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value;
    if (!message.trim()) return;
    
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p class='user'><strong>You:</strong> ${message}</p>`;
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    
    let response = await generateResponse(message);
    chatBox.innerHTML += `<p class='ai'><strong>Cruel Therapist:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function generateResponse(input) {
    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: "You are a brutally honest and sarcastic therapist."},
                {role: "user", content: input}
            ],
            max_tokens: 200
        })
    });

    let data = await response.json();
    return data.choices[0]?.message?.content.trim();
}

// Event listener for Enter key press
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
