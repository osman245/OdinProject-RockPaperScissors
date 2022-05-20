function computerPlay() {
  let computerGen = Math.floor(Math.random() * 3);

  switch (computerGen) {
    case 0:
      // code block
      return "Rock";
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
  return "error";
}

function playRound(playerSelection, computerSelection) {
  let player, comp;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "You choose the same sign! Draw!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    cpuScore(comp);
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper";
  }
}

function game() {
  let player, comp;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your sign!");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (comp > player) {
    return "You lost to the computer!!";
  } else if (comp < player) {
    return "You won against the computer!!";
  }
  return "its a tie";
}

function cpuScore(number) {
  return number++;
}

function playerScore(number) {
  return number++;
}

game();
