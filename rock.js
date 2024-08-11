function getComputerChoice() {
    let rockPaperScissors = (Math.random() <= 0.33) ? "rock" :
    (Math.random() >= 0.66) ? "paper" :
    "scissors"; 
    return rockPaperScissors;
}
function getHumanChoice(){
    let humanChoice = prompt("Rock Paper or Scissors? ");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
    else {
        alert("SEEMS LIKE YOU DON'T KNOW HOW TO PLAY THE GAME!");
    }
}

function playround (humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats paper");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (computerChoice=== "paper" && humanChoice === "rock") {
        alert("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        alert("You lose! Rock beats paper");
        computerScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        alert("You lose! Scissors beats Paper");
        computerScore++;
    }
    else {
        alert("Draw!");
    }
}
let humanScore = 0;
let computerScore = 0;
function playgame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection == null) {
            continue;
        }
        playround(humanSelection, computerSelection);
    }
    alert(`Your Score: ${humanScore} Computer Score: ${computerScore}`);
}

console.log(playgame());