'use strict';

const bookings = [];

const createdBooking = function (
    flightNum, 
    numPassengers = 1, 
    price = 200 * numPassengers) {
  //
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createdBooking('Jihunyspark');
createdBooking('Jihun', 2, 800);
createdBooking('JJames', 2, 800);
createdBooking('Jid', 2, 800);
