const storyText = document.getElementById('story-text');
const choiceButtons = [
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3'),
    document.getElementById('choice4')
];

let currentStory = 0;

// Define the structure of the story
const story = [
    {
        text: "You wake up in a dark room with no memory of how you got there. A door creaks open to your left.",
        choices: [
            { text: "Walk through the door", next: 1 },
            { text: "Stay in the room", next: 2 },
            { text: "Search the room", next: 3 },
            { text: "Call for help", next: 4 }
        ]
    },
    {
        text: "You walk through the door and find yourself in a dimly lit hallway. There's a strange noise ahead.",
        choices: [
            { text: "Move toward the noise", next: 5 },
            { text: "Turn back", next: 2 },
            { text: "Hide", next: 6 },
            { text: "Run", next: 7 }
        ]
    },
    {
        text: "You stay in the room, but the walls start closing in on you.",
        choices: [
            { text: "Panic", next: 8 },
            { text: "Look for an exit", next: 9 },
            { text: "Close your eyes and hope for the best", next: 10 },
            { text: "Scream", next: 11 }
        ]
    },
    {
        text: "As you search the room, you find a hidden passage leading to a cellar.",
        choices: [
            { text: "Enter the cellar", next: 12 },
            { text: "Stay where you are", next: 2 },
            { text: "Block the door", next: 13 },
            { text: "Leave the room", next: 1 }
        ]
    },
    {
        text: "You call for help, but no one answers. Suddenly, the door slams shut.",
        choices: [
            { text: "Panic", next: 14 },
            { text: "Search for another exit", next: 3 },
            { text: "Wait", next: 15 },
            { text: "Yell again", next: 16 }
        ]
    },
    {
        text: "You move toward the noise and come face-to-face with a ghostly figure!",
        choices: [
            { text: "Run", next: 17 },
            { text: "Talk to it", next: 18 },
            { text: "Attack it", next: 19 },
            { text: "Faint", next: 20 }
        ]
    },
    // Additional story nodes leading to 10 different endings
    {
        text: "You hid in the shadows, but something sinister is watching you...",
        choices: [
            { text: "Stay hidden", next: 21 },
            { text: "Make a run for it", next: 22 },
            { text: "Confront it", next: 23 },
            { text: "Stay still", next: 24 }
        ]
    },
    // More nodes for varied paths and length depending on choice
];

// Game logic to update the story text and choices based on currentStory
function updateStory() {
    storyText.textContent = story[currentStory].text;
    for (let i = 0; i < choiceButtons.length; i++) {
        if (story[currentStory].choices[i]) {
            choiceButtons[i].textContent = story[currentStory].choices[i].text;
            choiceButtons[i].style.display = 'inline-block';
            choiceButtons[i].onclick = () => {
                currentStory = story[currentStory].choices[i].next;
                updateStory();
            };
        } else {
            choiceButtons[i].style.display = 'none';
        }
    }
}

// Start the story
updateStory();
