'use strict';

const flight = 'JH123';
const jihun = {
    name: 'Jihun Park',
    passport: 123456789,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'JH987';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 123456789) {
        alert('Check In')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, jihun);
// console.log(flight);
// console.log(jihun);

// is the same as doing ... 
// const flightNum = flight;
// const passenger = jihun;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(jihun); 
checkIn(flight, jihun);

