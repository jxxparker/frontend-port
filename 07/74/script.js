'use strict';

const secretNumber = Math.trunc(Math.random() *20) + 1;
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'Wrong number';
    } else if (guess === secretNumber) {
        
    }
});





