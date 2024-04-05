let playerScore = 0;
let computerScore = 0;
const user = ["Player", "Computer"];

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper") 
    ) {
        playerScore++;
        updateScore();
        return "You win! " + playerChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        updateScore();
        return "You lose! " + computerChoice + " beats " + playerChoice;
    }
}

function checkWinner() {
    if (playerScore >= 5) {
        return "You won!";
    } else if (computerScore >=5) {
        return "You lost!";
    } else {
        return null;
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    const winner = checkWinner();
    if (winner) {
        alert(winner);
    }
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');

rockButton.addEventListener('click', () => {
    const result = playRound ('rock', getComputerChoice());
    resultsDiv.textContent = result;
});

paperButton.addEventListener('click', () => {
    const result = playRound ('paper', getComputerChoice());
    resultsDiv.textContent = result;
});

scissorsButton.addEventListener('click', () => {
    const result = playRound ('scissors', getComputerChoice());
    resultsDiv.textContent = result;
});

updateScore();
