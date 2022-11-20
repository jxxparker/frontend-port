'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  // console.log(firstName); // can access the out because its coming in.

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        const firstName = 'Jordan';
        const str = `You are a millenial, ${firstName}`
        console.log(str);

        function add(a,b) {
            return a + b;
        }
    }
    // console.log(add(2,3)); // this doesn't work because its outside (ps: without strict mode this works)
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Jihun';
calcAge(1992);
// console.log(age); // can't access because it is outer scope.
