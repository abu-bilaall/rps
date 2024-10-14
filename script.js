// score board
let humanScore = 0;
let computerScore = 0;

// generating computer's choice
function getComputerChoice() {
    let values = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * 3);
    return values[randIndex];
}

// getting player's choice
function getHumanChoice() {
    let values = ['rock', 'paper', 'scissors'];
    let choice = prompt("Rock/Paper/Scissors.. what do you choose?");
    for (let i = 0; i < values.length; i++) {
        if (values[i] === choice) {
            return choice;
        }
    }

    console.log("Please, choose either of these items - Rock/Paper/Scissors.");
}

// player choices and events
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());

        // checking the current total score for players
        if (humanScore === 5) {
            finalMessage.textContent = "You are the ultimate champion!";
            resultsContainer.appendChild(finalMessage);
        } else if (computerScore === 5) {
            finalMessage.textContent = "Well, Booohoo! You just got mogged!";
            resultsContainer.appendChild(finalMessage);
        }
    });
});

// dom shenanigans
const resultsContainer = document.querySelector('.results');
let finalMessage = document.createElement('h3');

const message = document.createElement('div');
message.textContent = "No game in session";
resultsContainer.appendChild(message);

const playerScore = document.createElement('div');
playerScore.textContent = "Player: 0";
resultsContainer.appendChild(playerScore);

const botScore = document.createElement('div');
botScore.textContent = "Computer: 0";
resultsContainer.appendChild(botScore);

// gameplay logic and more dom shenanigans
function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // cases for a human win
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats Scissors.");
        message.textContent = "You win this round! Rock beats Scissors.";
        humanScore++;
        playerScore.textContent = `Player: ${humanScore}`;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats Rock.");
        message.textContent = "You win this round! Paper beats Rock.";
        humanScore++;
        playerScore.textContent = `Player: ${humanScore}`;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissors beats Paper.");
        message.textContent = "You win this round! Scissors beats Paper.";
        humanScore++;
        playerScore.textContent = `Player: ${humanScore}`;

    // cases for a computer win
    } else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        console.log("You lose! Rock beats Scissors.");
        message.textContent = "You lose this round! Rock beats Scissors.";
        computerScore++;
        botScore.textContent = `Computer: ${computerScore}`;
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log("You lose! Paper beats Rock.");
        message.textContent = "You lose this round! Paper beats Rock.";
        computerScore++;
        botScore.textContent = `Computer: ${computerScore}`;
    } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        console.log("You lose! Scissors beats Paper.");
        message.textContent = "You lose this round! Scissors beats Paper.";
        computerScore++;
        botScore.textContent = `Computer: ${computerScore}`;
    } else {
        console.log("This round is a draw!");
        message.textContent = "This round is a draw!";
    }
}