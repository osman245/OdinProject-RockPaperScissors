function computerPlay() {
  let computerGen = Math.floor(Math.rand() * 3);

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

function playRound(playSelection, computerSelection) {}

let gameResult = document.querySelector("#game").value;
