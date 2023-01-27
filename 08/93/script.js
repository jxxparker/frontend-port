'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`
    console.log(output);
  }
  printAge();
  return age;
};

const firstName = 'Jihun';
calcAge(1992);
console.log(age);