'use strict';

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

// const greetHey = greet("Hey");
// greetHey('Jihun');
// greetHey('James');

greet('Hellos')('jihun');

// Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Hi')('James');