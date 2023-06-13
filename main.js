const choices = ["rock", "paper", "scissors"];
const winners = [];
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  const computerSelection = choiceComputer();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  displayRound(playerSelection, computerSelection, winner);
  updateScore(winner);
  displayScore();
  checkGameEnd();
}

function choiceComputer() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP == choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function displayScore() {
  const scoreDiv = document.getElementById("score");
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function updateScore(winner) {
  if (winner === "Player") {
    playerScore++;
  } else if (winner === "Computer") {
    computerScore++;
  }
}

function displayRound(choicePlayer, choiceComputer, winner) {
  const resultsDiv = document.getElementById("results");
  const roundResult = document.createElement("p");
  roundResult.textContent = `Player Chose: ${choicePlayer}, Computer Chose: ${choiceComputer}, ${winner} won the round`;
  resultsDiv.appendChild(roundResult);
}

function checkGameEnd() {
  if (playerScore === 5 || computerScore === 5) {
    const resultsDiv = document.getElementById("results");
    const gameResult = document.createElement("p");
    const winner = playerScore > computerScore ? "Player" : "Computer";
    gameResult.textContent = `${winner} wins the game!`;
    resultsDiv.appendChild(gameResult);

    // Disable buttons after the game ends
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

// Add event listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id); // Passes the button's id (player's selection) to the playRound function
  });
});
