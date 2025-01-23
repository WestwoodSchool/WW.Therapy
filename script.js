function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value;
    if (!message.trim()) return;
    
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    inputField.value = "";
    
    setTimeout(() => {
        let response = generateResponse(message);
        chatBox.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function generateResponse(input) {
    let lowered = input.toLowerCase();
    if (lowered.includes("ugly")) {
        return "Yes, yes you are. But at least you’re self-aware!";
    } else if (lowered.includes("tired")) {
        return "Maybe sleep instead of talking to an AI?";
    } else if (lowered.includes("sad")) {
        return "Aww, poor you. Life is tough, isn't it?";
    } else {
        return "Wow, that’s a problem. Maybe try fixing it?";
    }
}
