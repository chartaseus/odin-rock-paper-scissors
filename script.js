function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber < 33) {
        return "rock";
    } else if (randomNumber >= 33 && randomNumber < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// create a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    const para = document.createElement("p");
    scoreboard.appendChild(para);

    /* Possible combinations:
        player   >< computer
        --------------------
        rock     >< rock     => tie
        rock     >< paper    => lose
        rock     >< scissors => win
        paper    >< rock     => win
        paper    >< paper    => tie
        paper    >< scissors => lose
        scissors >< rock     => lose
        scissors >< paper    => win
        scissors >< scissors => tie
    */

    // If player selection = computer selection then it's a tie
    if (playerSelection === computerSelection) {
        para.textContent = "It's a tie!";
        return "tie";
    }

    // rock >< paper, paper >< scissors, scissors >< rock => lose
    if (
        (playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        para.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        return "lose";
    }

    // rock >< scissors, paper >< rock, scissors >< paper => win
    if (
        (playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        para.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        return "win";
    }
}

// Testing playRound
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));
// playRound(playerSelection, computerSelection);

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const scoreboard = document.querySelector(".scoreboard");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // while (scoreboard.hasChildNodes()) {
        //     scoreboard.removeChild(scoreboard.firstChild);
        //   }

        scoreboard.textContent = ""; //clear scoreboard
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === "win") {
            playerScore++;
        } else if (result === "lose") {
            computerScore++;
        }

        const para = document.createElement("p");
        scoreboard.appendChild(para);
        para.textContent = `Your score = ${playerScore} | Computer's score = ${computerScore}.`
        if (playerScore == 5 || computerScore == 5) {
            scoreboard.removeChild(scoreboard.firstChild);

            if (playerScore > computerScore) {
                para.textContent = `You are the winner! You score ${playerScore}:${computerScore} against the computer.`
            } else {
                para.textContent = `Better luck next time! You score ${playerScore}:${computerScore} against the computer.`
            }
            playerScore = 0;
            computerScore = 0;
        }
    })
})