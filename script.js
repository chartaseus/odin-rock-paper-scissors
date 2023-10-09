function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    // console.log("Random number = " + randomNumber);

    if (randomNumber < 33) {
        return "Rock";
    } else if (randomNumber >= 33 && randomNumber < 66) {
        return "Paper";
    } else {
        return "Scissor";
    }
}