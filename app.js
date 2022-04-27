let computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(computerSelection === "rock" && playerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(computerSelection === "rock" && playerSelection == "scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `It's a tie...${computerSelection} Vs. ${playerSelection} `
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let numberOfRounds = 5;

    for ( let i = 0; i<numberOfRounds; i++) {
        let res = playRound(computerPlay(), prompt("What do u pick?"));
        if(res.includes("win")) {
            ++playerScore;
        } else if(res.includes("lose")) {
            ++computerScore;
        }
        console.log(res + ` Score: You: ${playerScore} : PC: ${computerScore}`)
    }

    if(playerScore>computerScore) {
        console.log("You won the game...")
    } else if (playerScore<computerScore) {
        console.log("You lost the game...")
    } else {
        console.log("Game is a tie...")
    }

}


game();