'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function(message) {
  document.querySelector('.score').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('👻 No Number');

    // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('👍🏻 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is Wrong
  } else if (guess != secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score -= 1;
      displayScore(score);
    } else {
      displayMessage('☠️ You lost the game');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing... Again.');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
