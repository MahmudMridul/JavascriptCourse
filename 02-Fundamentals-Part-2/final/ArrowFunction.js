`use strict`;

let addTwoNumbers = (a, b) => a + b;
// console.log(addTwoNumbers(1,2));

let printSuffAndReturn = (stuffToPrint, stuffToReturn) => 
{
    console.log(`These are stuffs to print : ${stuffToPrint}`);
    return stuffToReturn;
}

// console.log(printSuffAndReturn(`Print anything`, `REturn anyThing`));

//CODING CHALLENGE

let calculateAverage = (first, second, third) => (first + second + third) / 3;

let dolphinAvg = calculateAverage(85,54,41);
let koalaAvg = calculateAverage(23,34,17);

let checkWinner = (firstAvg, secondAvg) => {
    if(firstAvg >= secondAvg * 2) {
        return firstAvg;
    }

    if(secondAvg >= firstAvg * 2) {
        return secondAvg;
    }

    return -1;
}

let score = checkWinner(dolphinAvg, koalaAvg);

if(score === dolphinAvg) {
    console.log(`WINNER : Dolphins` );
}
else if(score === koalaAvg) {
    console.log(`WINNER : Koalas`);
}
