'use strict'

const secureBooking = ( ) => {
    let passengerCount = 0;

    return ( ) => {
        ++passengerCount;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

//booker function has access to passengerCount 
//even after secureBooking function has exited.
//this concept is closure
booker();
booker();