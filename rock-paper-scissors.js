console.log("Welcome to Rock, Paper, Scissors: Console Edition!\nBest out of five rounds starts now...")
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

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    rockButton.addEventListener("click", () => {playRound("rock", getComputerChoice())});
    paperButton.addEventListener("click", () => {playRound("paper", getComputerChoice())});
    scissorsButton.addEventListener("click", () => {playRound("scissors", getComputerChoice())});

    const results = document.querySelector("#results");

    if (computerScore > playerScore)
        results.textContent = "COM wins the game! ";
    else if (playerScore > computerScore)
        results.textContent = "You win the game! ";
    else
        results.textContent = "It was a tie! ";
    results.textContent += "The score was", playerScore, "-", computerScore;

    function playRound(playerChoice, compChoice)
    {
        console.log(compChoice);
        console.log(playerChoice);
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
    }
}