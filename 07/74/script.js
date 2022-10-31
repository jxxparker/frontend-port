'use strict';

const secretNum = Math.trunc(Math.random() *20) + 1;
let score = 10;
document.querySelector('.number').textContent = secretNum;

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if (guess === secretNum) {
        document.querySelector('.message').textContent = 'Correct  Number!'

    } else if (guess > secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
        }

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





