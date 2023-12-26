function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    // console.log("Random number = " + randomNumber);

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

    // Make your function’s playerSelection parameter case-insensitive
    playerSelection = playerSelection.toLowerCase();
    
    // Throw error for invalid input
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Invalid input. Enter rock, paper, or scissors.")
        return "invalid";
    }
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
        console.log("It's a tie!");
        return "tie";
    }

    // rock >< paper, paper >< scissors, scissors >< rock => lose
    if (
        (playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "lose";
    }

    // rock >< scissors, paper >< rock, scissors >< paper => win
    if (
        (playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
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
// create variable to save result of a round
let result = "";
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result === "win") {
            playerScore++;
        } else if (result === "lose") {
            computerScore++;
        }
        console.log(`Your score = ${playerScore} | Computer's score = ${computerScore}`)
        if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {console.log("You are the winner!")}
            else {console.log("Better luck next time!")}
            playerScore = 0;
            computerScore = 0;
        }
    })
})