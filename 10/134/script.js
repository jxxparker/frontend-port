'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'JH',
    bookings: [],

    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

// lufthansa.book(239, 'James');
// lufthansa.book(1567, 'Jordan');
// console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
// book(23, 'Kelly Chung'); // THIS DOESN'T WORK!!!!!

// This works now.
// console.log(eurowings);
book.call(eurowings, 23, 'Kelly Chung');
book.call(lufthansa, 987, 'Jimmy Butler')

const swiss = {
    airline: 'swiss',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, '23', 'Jordan Mike');

// Apply method
const flightData = [567, 'Ja morant'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);


// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(77, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);