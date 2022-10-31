'use strict';

const secretNum = Math.trunc(Math.random() *20) + 1;
let score = 10;
document.querySelector('.number').textContent = secretNum;

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    
    // When number is correct
    } else if (guess === secretNum) {
        document.querySelector('.message').textContent = 'Correct  Number!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

    // When guess is too High
    } else if (guess > secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
        }

    // When guess is too low
    } else if (guess < secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }   
    }
});





