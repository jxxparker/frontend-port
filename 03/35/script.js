
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log("calcAge3 is " + age3)