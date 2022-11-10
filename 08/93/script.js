'use strict';

function calcAge(birthYear) {
    const age = 2022 - birthYear;
    
    function printAge() {
        const output = `${firstName} is ${age} years old, born in ${birthYear}`;
        console.log(output);
                
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;  
            }
        }
        console.log(millenial);
    }
    printAge();
    return age;
}

const firstName = 'Jihun';
calcAge(1992);

