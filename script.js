function getComputerChoice() {
    let values = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * 3);
    return values[randIndex];
}

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

console.log(getComputerChoice());
console.log(getHumanChoice());