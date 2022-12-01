// @ts-nocheck
'use strict';

const getRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let score = 20;
let highScore = 0;
let randomNumber = getRandomNumber();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackgroundColor = function (query, color) {
  document.querySelector(query).style.backgroundColor = color;
};

const changeWidth = function (query, width) {
  document.querySelector(query).style.width = width;
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
    changeBackgroundColor('body', 'green');
    changeWidth('.number', '30rem');

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
  randomNumber = getRandomNumber();
  displayMessage('Start guessing...');
  showScore(score);
  showCorrectNumber('?');
  document.querySelector('.guess').value = '';
  changeBackgroundColor('body', '#222');
  changeWidth('15rem');
});
