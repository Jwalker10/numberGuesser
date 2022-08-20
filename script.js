let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generating random number between 1 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
};

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
    //calculating distance from guesses to tareget number
    const humanTargetDiff = Math.abs(humanGuess - targetNum);
    const computerTargetDiff = Math.abs(computerGuess - targetNum);
    //comapring guesses distance from tareget number and returning winning result
    if (humanTargetDiff < computerTargetDiff) {
        return true;
    } else if (humanTargetDiff > computerTargetDiff) {
        return false;
    } else {
        return true;
    };
};

//updates score for winner
const updateScore = (winner) => {
    winner === 'human' ? humanScore++ : computerScore++;
};

//advances to the next round
const advanceRound = () => {
    currentRoundNumber++;
};