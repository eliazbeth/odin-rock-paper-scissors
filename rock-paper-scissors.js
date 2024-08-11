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

    if (computerScore > playerScore)
        console.log("COM wins the game! ");
    else if (playerScore > computerScore)
        console.log("You win the game! ");
    else
        console.log("It was a tie!");
    console.log("The score was",playerScore, "-", computerScore);

    function playRound(playerChoice, compChoice)
    {
        playerChoice = playerChoice.toLowerCase();
        console.log(compChoice);
        console.log(playerChoice);
        if(compChoice == playerChoice)
            console.log("It's a tie! Both chose", playerChoice);
        else if((compChoice == "rock" && playerChoice == "paper") ||
                (compChoice == "scissors" && playerChoice == "rock") ||
                (compChoice == "paper" && playerChoice == "scissors"))
        {
            playerScore++;
            console.log("You win!", playerChoice.toUpperCase(), "beats", compChoice.toUpperCase());
        }
        else
        {
            computerScore++;
            console.log("You lose!", compChoice.toUpperCase(), "beats", playerChoice.toUpperCase())
        }
    }
}