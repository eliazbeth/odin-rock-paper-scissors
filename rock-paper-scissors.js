playGame();

function getComputerChoice()
{
    choice = Math.random()
    if (choice <= 0.33)
        return "rock";
    else if(choice <= 0.66)
        return "paper";
    else
        return "scissors";
}
function getPlayerChoice()
{
    return prompt("Enter 'rock', 'paper', or 'scissors': ");
}

function playGame()
{
    computerScore = 0;
    playerScore = 0;

    const results = document.querySelector("#results");
    const score = document.querySelector("#score");
    const body = document.querySelector("body");

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    rockButton.addEventListener("click", () => {playRound("rock", getComputerChoice())});
    paperButton.addEventListener("click", () => {playRound("paper", getComputerChoice())});
    scissorsButton.addEventListener("click", () => {playRound("scissors", getComputerChoice())});

    function playRound(playerChoice, compChoice)
    {
        if(compChoice == playerChoice)
            results.textContent = "It's a tie! Both chose " + playerChoice.toUpperCase();
        else if((compChoice == "rock" && playerChoice == "paper") ||
                (compChoice == "scissors" && playerChoice == "rock") ||
                (compChoice == "paper" && playerChoice == "scissors"))
        {
            playerScore++;
            results.textContent = "You win! " + playerChoice.toUpperCase() + " beats " + compChoice.toUpperCase();
        }
        else
        {
            computerScore++;
            results.textContent = "You lose! " + compChoice.toUpperCase() + " beats " + playerChoice.toUpperCase();
        }
        score.textContent = "YOU: " + playerScore + "\nCOM: " + computerScore;
        if(playerScore == 5 || computerScore == 5)
        {
            body.removeChild(rockButton);
            body.removeChild(paperButton);
            body.removeChild(scissorsButton);
            if (computerScore > playerScore)
                results.textContent = "COM wins the game! ";
            else
                results.textContent = "You win the game! ";
        }
    }
}