const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const choices = document.querySelector("#choices");
choices.addEventListener("click", (event) => {
  playRound(event.target.id);
});

const reset = document.getElementById("reset");
reset.addEventListener("click", resetGame);

function resetGame() {
  document.getElementById("playerScore").textContent = 0;
  document.getElementById("computerScore").textContent = 0;
  document.getElementById("result").textContent = "";
  reset.style.display = "none";
}
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  if (humanChoice == computerChoice) {
    updateScores([0, 0]);
  }
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          updateScores([0, 1]);
          break;
        case "scissors":
          updateScores([1, 0]);
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "scissors":
          updateScores([0, 1]);
          break;
        case "rock":
          updateScores([1, 0]);
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          updateScores([0, 1]);
          break;
        case "paper":
          updateScores([1, 0]);
          break;
      }
      break;
  }
}
function updateScores(scores) {
  const playerScore = document.getElementById("playerScore");
  const computerScore = document.getElementById("computerScore");
  let newPlayerScore = parseInt(playerScore.textContent) + scores[0];
  let newComputerScore = parseInt(computerScore.textContent) + scores[1];
  if (newPlayerScore == 5 || newComputerScore == 5) {
    document.getElementById("result").textContent =
      newPlayerScore == 5 ? "You win!" : "You lose!";
    reset.style.display = "flex";
  }
  playerScore.textContent = parseInt(playerScore.textContent) + scores[0];
  computerScore.textContent = parseInt(computerScore.textContent) + scores[1];
}
//getHumanChoice() is deprecated
function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice = prompt("rock, paper, or scissors?");
  while (!choices.includes(choice)) {
    choice = prompt("rock, paper, or scissors?").toLowerCase().trim();
  }
  return choice;
}
//depcrecated
function playGame(n) {
  let scores = [0, 0];

  for (let i = 0; i < n; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let round = playRound(humanChoice, computerChoice);
    scores[0] += round[0];
    scores[1] += round[1];
  }
  if (scores[0] > scores[1]) {
    console.log("You win the game!");
  } else if (scores[0] == scores[1]) {
    console.log("You tie the game!");
  } else {
    console.log("You lose the game!");
  }
  console.log(scores);
}
