'use strict';

const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers,
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('JH123');
createBooking('JH123', 2, 800);
createBooking('JH123', 2);
createBooking('JH123', 5);