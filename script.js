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

/* Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */

function game() {
    // create variable to save player score and computer score
    let playerScore = 0;
    let computerScore = 0;
    // create variable to save result of a round
    let result = "";

    // Stops the game once one player reach 5 points
    while (playerScore < 5 && computerScore < 5) {
        // get player selection
        const playerSelection = prompt(`Type Rock, Paper, or Scissors: `);
        // get computer selection
        const computerSelection = getComputerChoice();
        // play round
        result = playRound(playerSelection, computerSelection);
        // save score to respective winner
        if (result === "win") {
            playerScore++;
        } else if (result === "lose") {
            computerScore++;
        }
        // TODO display the running score 
    }

    // higher score is the winner
    console.log((playerScore > computerScore ? "You are the winner!" : (playerScore == computerScore ? "It's a tie!" : "Better luck next time!")) + ` You score ${playerScore}:${computerScore} against the computer.`)
}

// play game
game();