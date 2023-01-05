'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1; // random number from 0 - 19
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '👻 No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍🏻 Correct Number';
  } else if (guess > secretNumber) {
    
  }
});