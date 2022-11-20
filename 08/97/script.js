'use strict';

// const calcAge = function(birthYear) {
//     console.log(2022 - birthYear);
//     // console.log(this); // prints undefined
// };
// calcAge(1992);

// const calcAgeArrow = birthYear => {
//     console.log(2022 - birthYear);
//     console.log(this); 
// };
// calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2022 - this.year);
    }
}
jonas.calcAge();

const matilda = {
  year: 1997,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
console.log(f);
