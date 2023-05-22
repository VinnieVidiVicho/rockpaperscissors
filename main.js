const choices = ["rock", "paper", "scissors"];
const winners = [];


function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector('button').textcontent = 'Play new game';
    displayWins(); 
}

function playRound(round) {
    const playerSelection = choicePlayer();
    const computerSelection = choiceComputer();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    displayRound(playerSelection, computerSelection, winner,round)
}

function choicePlayer () {
    let input = prompt("Type Rock, Paper or Scissors");
    while(input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper or Scissors, capitalization does not matter"
        );
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function choiceComputer() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choices){
    return choices.includes(choices);
}

function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC){
        return "Tie";   
    } else if (
    (choiceP === "rock" && choiceC =="scissors") || 
    (choiceP === "paper" && choiceC =="rock") || 
    (choiceP ==="scissors" && choiceC =="paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function displayWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function displayRound(choicePlayer, choiceComputer, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", choicePlayer);
    console.log("Computer Chose:", choiceComputer);
    console.log(winner, "Won the round");
    console.log("---------------------------");
}
game();