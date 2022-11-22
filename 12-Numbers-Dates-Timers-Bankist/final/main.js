'use strict'

// let aHugeNumber = 385920193858473937538574930574838592858395940n;
// let bHugeNumber = 93287409213874092740923749028749028749823749834n;
// let sumofHuges = aHugeNumber + bHugeNumber;
// console.log(sumofHuges);


let rightNow = new Date();
// console.log(rightNow);
// let bd = new Date('Feb 18 1997');
// console.log(bd);
// let bdn = new Date('2 July 1997');
// console.log(bdn);

// let date = new Date(10 * 24 * 60 * 60 * 1000);
// console.log(date);

// console.log(rightNow.getDay());
// console.log(rightNow.getFullYear());

let international = Intl.DateTimeFormat('en-US').format(rightNow);
// console.log(international);

let locale = navigator.language;
// console.log(locale);

const options = {
    style : 'unit',
    unit : 'mile-per-hour'
}

// let interNum = Intl.NumberFormat('en-US', options).format(aHugeNumber);
// console.log(interNum);


// when execution reaches setTimeout function it 
// executes the call back function (function passed as parameter)
// after given amount of time 3 sec in this case
// meanwhile other lines keep getting executed
console.log('waiting for pizza');
setTimeout(
    ( ) => {
        console.log('here is your pizza 🍕');
    },
    3000
);
console.log('got pizza');

setTimeout(
    (argOne, argTwo) => {
        console.log(`Here is the function with ${argOne} and ${argTwo}`);
    },
    2000,
    'some parameter',
    'again some parameter'
);

let dontExecute = true;

let neverGetsExecuted = setTimeout(
    ( ) => {
        console.log('I may not get executed');
    },
    4000
);

if(dontExecute) {
    clearTimeout(neverGetsExecuted);
}

// setInterval(
//     ( ) => {
//         const now = new Date();
//         console.log(now);
//     },
//     2000
// );

