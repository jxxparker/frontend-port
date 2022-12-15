'use strict';

const jordan = {
    airline: 'jordan',
    iataCode: "MJ23",
    bookings: [],
    
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);

    this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
    },

};

jordan.book(239, 'Jihunypark Park');
jordan.book(211, 'Kobe Bryant');
console.log(jordan);

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};