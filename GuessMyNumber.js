// @ts-nocheck
'use strict';

const getNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let score = 20;
let highScore = 0;
let randomNumber = getNumber();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const showCorrectNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there's no input
  if (!guess) {
    displayMessage('⛔️ Please guess a number!');

    // when player wins
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct number!');
    showCorrectNumber(randomNumber);
    changeBackground('green');
    changeWidth('30rem');

    // save highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'Too high' : 'Too low');
      score--;
      showScore(score);
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reload game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = getNumber();
  displayMessage('Start guessing...');
  showScore(score);
  showCorrectNumber('?');
  document.querySelector('.guess').value = '';
  changeBackground('#222');
  changeWidth('15rem');
});
