//id's needed..
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const btnPlayRound = document.querySelector("#playRound");
let playerSign = null;

//generate the computers sign
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
//play a round
function playRound(playerSelection, computerSelection) {
  let player, comp;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    document.getElementById("results").innerHTML =
      "You choose the same sign! Draw!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    document.getElementById("results").innerHTML = "You Lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    document.getElementById("results").innerHTML =
      "You Lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    document.getElementById("results").innerHTML =
      "You Lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    document.getElementById("results").innerHTML = "You Win! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    document.getElementById("results").innerHTML =
      "You Win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    document.getElementById("results").innerHTML =
      "You Win! Scissors beats Paper";
  }
}

//functions invoked when buttons clicked
function buttonPlay(e) {
  playerSign = e.target.value;
  return (document.getElementById(
    "pSelect"
  ).innerHTML = `you picked ${e.target.value}`);
}

//add eventListeners
btnRock.addEventListener("click", (e) => buttonPlay(e));
btnPaper.addEventListener("click", (e) => buttonPlay(e));
btnScissors.addEventListener("click", (e) => buttonPlay(e));
btnPlayRound.addEventListener("click", () =>
  playRound(playerSign, computerPlay())
);
