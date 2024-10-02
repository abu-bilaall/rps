function getComputerChoice() {
    let values = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * 3);
    return values[randIndex];
}
