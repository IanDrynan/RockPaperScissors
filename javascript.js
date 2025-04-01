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
function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice = prompt("rock, paper, or scissors?");
  while (!choices.includes(choice)) {
    choice = prompt("rock, paper, or scissors?").toLowerCase().trim();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
  if (humanChoice == computerChoice) {
    console.log("tie");
    return [0, 0];
  }

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          console.log("You lose");
          return [0, 1];
        case "scissors":
          console.log("You win");
          return [1, 0];
      }
    case "paper":
      switch (computerChoice) {
        case "scissors":
          console.log("You lose");
          return [0, 1];
        case "rock":
          console.log("You win");
          return [1, 0];
      }
    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("You lose");
          return [0, 1];
        case "paper":
          console.log("You win");
          return [1, 0];
      }
  }
}
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
  }
  else if (scores[0] == scores[1]) {
    console.log("You tie the game!");
  } else {
    console.log("You lose the game!");
  }
  console.log(scores);
}
playGame(5);
