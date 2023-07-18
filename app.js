const userChoiceDisplay = document.querySelector("#user-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
let computerChoice;
let userChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    generateResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You lose";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You Win";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You Win";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You Lose";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You lose";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You Win";
  }
  resultDisplay.innerHTML = result;
}
