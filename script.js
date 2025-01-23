async function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value;
    if (!message.trim()) return;
    
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    inputField.value = "";
    
    let response = await generateResponse(message);
    chatBox.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function generateResponse(input) {
    let response = await fetch("https://api.openai.com/v1/engines/text-davinci-003/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_OPENAI_API_KEY"
        },
        body: JSON.stringify({
            prompt: `You are an honest and sarcastic therapist. Respond to: "${input}"`,
            max_tokens: 50
        })
    });
    
    let data = await response.json();
    return data.choices[0].text.trim();
}
