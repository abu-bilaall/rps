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
    });
});

const resultsContainer = document.querySelector('.results');

const message = document.createElement('div');
message.textContent = "No game in session";
resultsContainer.appendChild(message);

const playerScore = document.createElement('div');
playerScore.textContent = "Player: 0";
resultsContainer.appendChild(playerScore);

const botScore = document.createElement('div');
botScore.textContent = "Computer: 0";
resultsContainer.appendChild(botScore);

// gameplay logic
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

// // simulating a game session of five rounds
// function playGame () {
//     let humanSelection = '';
//     let computerSelection = '';

//     for (let i = 0; i < 5; i++) {
//         // new choice for new round
//         humanSelection = getHumanChoice();
//         computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);
//         console.log(humanScore);
//         console.log(computerScore);
//     }

//     // declare winner
//     if (humanScore > computerScore) {
//         console.log("You're the ultimate champion!");
//     } else if (computerScore > humanScore) {
//         console.log("You just lost the championship, champ!");
//     } else {
//         console.log("This ended in a brutal draw!");
//     }
// }

// playGame();