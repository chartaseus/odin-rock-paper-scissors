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
        return 'Invalid input. Enter rock, paper, or scissors.'
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
        return "It's a tie!";
    }

    // rock >< paper, paper >< scissors, scissors >< rock => lose
    if (
        (playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    // rock >< scissors, paper >< rock, scissors >< paper => win
    if (
        (playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

// Testing playRound
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));