// score board
let humanScore, computerScore = 0;

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

    return "Please, choose either of these items - Rock/Paper/Scissors.";
}

// gameplay logic for every round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // cases for a human win
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissors beats Paper.");
        humanScore++;

     // cases for a computer win
    } else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else {
        console.log("This round is a draw!");
    }
  }
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);  