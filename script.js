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
    "what should i do": "Figure it out. I'm not your life coach.",
    "why is everything so hard": "Because nothing good comes easy.",
    "how do i find happiness": "Lower your expectations.",
    "why is everyone so annoying": "Maybe it's you? Just a thought.",
    "how do i stop procrastinating": "Just start. Revolutionary, I know.",
    "i hate people": "People probably feel the same about you.",
    "why am i always tired": "Try sleeping at night instead of scrolling.",
    "do you think i'm smart": "Compared to what? A rock?",
    "why am i always unlucky": "Luck favors those who do something about it.",
    "i feel empty": "Maybe fill yourself with something meaningful?",
    "i'm overthinking": "Stop. There. Problem solved.",
    "how do i get over my ex": "Delete their number. Move on.",
    "how do i become better": "Try doing the opposite of what got you here.",
    "i'm scared": "Of what? Facing reality?",
    "how do i stop being lazy": "Get up and do something, maybe?",
    "why do bad things always happen to me": "You're not special. Bad things happen to everyone.",
    "how do i be more confident": "Fake it till you make it.",
    "how do i be happy alone": "Enjoy your own company. Or get a cat.",
    "i'm feeling anxious": "Deep breaths. Or don't. I'm not a doctor.",
    "how do i improve myself": "One step at a time. Or a complete personality reboot.",
    "why do i keep failing": "Maybe stop doing whatever got you here.",
    "why does life suck": "It's not all bad. Just mostly.",
    "how do i become successful": "Define success first. Then chase it."
};

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
    return "I have no response to that, but you should probably reflect on it.";
}

// Event listener for Enter key press
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
