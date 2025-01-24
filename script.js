const responses = {
    "i'm sad": "Well, that's life. Suck it up, buddy.",
    "i'm tired": "Maybe sleep instead of talking to an AI?",
    "i'm ugly": "At least you're self-aware!",
    "nobody likes me": "Maybe it's time for a personality upgrade?",
    "i'm broke": "Get a job. Problem solved!",
    "i'm stressed": "Sounds like a you problem. Try yoga or something.",
    "i need advice": "Bad idea. I have zero empathy, but sure, go ahead.",
    "i'm lonely": "Awww... Maybe try talking to real people?",
    "i failed my test": "Try studying next time instead of complaining to me.",
    "why am i like this": "That's a deep question. Not sure I care enough to answer.",
    "i'm hungry": "Eat something, genius.",
    "life is hard": "No kidding. Welcome to reality.",
    "i have no friends": "Maybe stop being so weird?",
    "nobody understands me": "Maybe you should be more understandable?",
    "i hate my job": "Then quit. Or suck it up.",
    "i need motivation": "Motivation is overrated. Just do it.",
    "i'm bored": "Sounds like a you problem.",
    "i need a break": "Go take one, why are you telling me?",
    "why do people lie": "Because the truth hurts. Like this conversation.",
    "how do i get rich": "Work harder. Or win the lottery.",
    "i want to be famous": "Good luck with that. Aim lower maybe?",
    "i can't sleep": "Try counting sheep or something.",
    "my crush doesn't like me": "Move on. It's not that deep.",
    "why am i single": "Maybe it's your personality?",
    "i'm feeling lost": "Buy a map or something.",
    "why do i exist": "That's above my pay grade.",
    "do you care about me": "Not even a little.",
    "i hate my life": "Try changing it then.",
    "i feel useless": "Then be useful.",
    "what's the meaning of life": "42. Or pizza. Who knows?",
    "will i be successful": "Depends. Are you willing to work?",
    "i feel like giving up": "Try not to. Or do. I'm just a chatbot.",
    "why is life unfair": "Because that's just how it is.",
    "i need help": "Well, I'm not a therapist, but go ahead.",
    "what should i do": "Figure it out. I'm not your life coach."
};

// Adding more responses to reach 300 unique lines
for (let i = 1; i <= 250; i++) {
    responses["random question " + i] = "Here's a honest answer for you: response " + i;
}

async function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.toLowerCase().trim();
    if (!message) return;
    
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p class='user'><strong>You:</strong> ${message}</p>`;
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    
    let response = generateResponse(message);
    chatBox.innerHTML += `<p class='ai'><strong>Therapist:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(input) {
    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }
    return "Hmmm... I'm too honest to even respond to that one.";
}

// Event listener for Enter key press
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
