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
    const playerPick = document.querySelector(".playerPick");
    const pcPick = document.querySelector(".pcPick"); 
    const result = document.querySelector(".result"); 
    const score = document.querySelector(".score");
    let playerScore = 0;
    let computerScore = 0;
    let res = "";

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            let computerPick = computerPlay();
            res = playRound(computerPick, btn.textContent)
            
            playerPick.textContent = "You: " + btn.textContent;
            pcPick.textContent = "PC: " + capitalizeString(computerPick);


            if(res.includes("win")) {
                result.textContent = "You won!"
                score.textContent = `Score: You: ${++playerScore} - PC: ${computerScore}`
            } else if(res.includes("lose")) {
                result.textContent = "You lost!"
                score.textContent = `Score: You: ${playerScore} - PC: ${++computerScore}`
            } else {
                result.textContent = "It's a tie..."
                score.textContent = `Score: You: ${playerScore} - PC: ${computerScore}`
                
            }

            if(playerScore == 5) {
                score.textContent = "GAME OVER. You won!"
                newGame();
            } else if(computerScore == 5) {
                score.textContent = "GAME OVER. You lost!"
                newGame();
            }

        })
    })

    function newGame() {
        playerScore = 0;
        computerScore = 0;
    }
    
}

function capitalizeString(input) {
    let temp = input.split("");
    temp[0] = temp[0].toUpperCase();
    return temp.join("") 
}


game();