let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  let secretNumber = Math.floor(Math.random() * 10);
  return secretNumber;
};
const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  const humanDifference = Math.abs(secretNumber - humanGuess);
  const computerDifference = Math.abs(secretNumber - computerGuess);
  return humanDifference <= computerDifference;
};
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};
const advanceRound = () => currentRoundNumber++;
