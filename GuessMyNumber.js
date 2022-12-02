'use strict';

// Get Randomnumber
const getRandomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};
let randomNumber = getRandomNumber();
console.log(randomNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const showRandomNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBackgroundColor = function (query, color) {
  document.querySelector(query).style.backgroundColor = color;
};

const changeWidth = function (query, width) {
  document.querySelector(query).style.width = width;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// when there's no valid input
function checkHandler() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ Please guess a number between 1 and 20');

    // when player wins
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct number!');
    showRandomNumber(randomNumber);
    changeBackgroundColor('body', 'green');
    changeWidth('.number', '30rem');

    // save highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // when guess is incorrect
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber ? 'Too high! Try again' : 'Too low! Try again'
      );
      score--;
      showScore(score);
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
}

function againHandler() {
  score = 20;
  randomNumber = getRandomNumber();
  displayMessage('Start guessing...');
  showScore(score);
  showRandomNumber('?');
  document.querySelector('.guess').value = '';
  changeBackgroundColor('body', '#222');
  changeWidth('.number', '15rem');
}

// listeners
document.querySelector('.check').addEventListener('click', checkHandler);
document.querySelector('.again').addEventListener('click', againHandler);
