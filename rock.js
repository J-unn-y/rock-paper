function getComputerChoice() {
    let rockPaperScissors = (Math.random() <= 0.33) ? "rock" :
    (Math.random() >= 0.66) ? "paper" :
    "scissors"; 
    return rockPaperScissors;
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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.textContent;
        const computerSelection = getComputerChoice();
        playround(humanSelection, computerSelection);
        div.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        if (humanScore == 5) {
            alert("YOU WIN!");
            location.reload();
        }
        else if (computerScore == 5) {
            alert("YOU LOSE!");
            location.reload();
        }
    });
});

const container = document.querySelector("#container");
const div = document.createElement("div");
container.appendChild(div);