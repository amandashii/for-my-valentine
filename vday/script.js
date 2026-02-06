const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const messages = [
    "no!",
    "are you sure?",
    "think about this",
    "baby please",
    "IF YOU CLICK THIS AGAIN I WILL EXPLODE",
    "noooo ˙◠˙",
    "im going to cry",
];

let messageIndex = 0;
let scale = 1;

noBtn.addEventListener('click', () => {
    // 1. Cycle through messages
    messageIndex = (messageIndex + 1) % messages.length;
    noBtn.innerText = messages[messageIndex];

    // 2. Increase scale
    scale += 0.6; 
    yesBtn.style.transform = `scale(${scale})`;

    // 3. Ensure Yes button stays on top of the No button
    yesBtn.style.zIndex = "100";
    
    // 4. If you reach the last message, make the No button fade out
    if (messageIndex === messages.length - 1) {
        noBtn.style.opacity = "0.5";
        noBtn.style.pointerEvents = "none"; // Makes it unclickable at the end
    }
});