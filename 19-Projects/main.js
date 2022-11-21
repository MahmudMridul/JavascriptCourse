'use strict'

let numOfRows = 7;
let numOfCols = 7;
let numOfCells = 0;

const keys = new Map([
    ['ArrowUp', 'border-top'],
    ['ArrowDown', 'border-bottom'],
    ['ArrowLeft', 'border-left'],
    ['ArrowRight', 'border-right'],
]);

let activePlayer = 0;
let scores = [30, 10];
let playerOneName = 'Player One';
let playerTwoName = 'Player Two';
let numOfBoxes = 0;

const playerElem = document.getElementsByClassName('player');
const tableSide = document.getElementsByClassName('container')[0];
const td = document.getElementsByTagName('td');
const switchBtn = document.getElementsByClassName('switch')[0];


console.log(playerElem[0].children[1]);

const createTable = (rows, cols) => {
    numOfRows = rows;
    numOfCols = cols;
    numOfCells = rows * cols;
    let tdNo = 0;
    let html = `<table>`;
    for(let r = 0; r < rows; ++r) {
        html += `<tr>`;
        for(let c = 0; c < cols; ++c) {
            html += `<td> &nbsp ${tdNo} &nbsp </td>`;
            ++tdNo;
        }
        html += `</tr>`;
    }
    html += `</table>`;
    tableSide.insertAdjacentHTML('afterbegin',html);
}

const isCellNoValid = (cellNo) => {
    return (cellNo >= 0 && cellNo < numOfCells);
}

const cellContainsClass = (cellNo, className) => {
    return td[cellNo].classList.contains(className);
}

const addClassToCell = (cellNo, className) => {
    td[cellNo].classList.add(className);
}

const removeClassFromCell = (cellNo, className) => {
    td[cellNo].classList.remove(className);
}

const cellIsABox = (cellNo) => {
    for(let className of keys.values()) {
        if(!cellContainsClass(cellNo, className)) {
            return false;
        }
    }
    return true;
}

const changeBoxCellColor = ( ) => {
    for(let i = 0; i < numOfCells; ++i) {
        if(cellIsABox(i)) {
            addClassToCell(i, 'is-box-p2');
        }
    }
} 

const addEventToCells = ( ) => {
    for(let i = 0; i < numOfCells; ++i) {
        td[i].addEventListener(
            'click', 
            ( ) => {
                for(let j = 0; j < numOfCells; ++j) {
                    if(cellContainsClass(j, 'clicked')) {
                        removeClassFromCell(j, 'clicked');
                    }
                }

                addClassToCell(i, 'clicked');
            }
        );
    }
}

const addBorderToCells = (event) => {
    for(let i = 0; i < numOfCells; ++i) {
        let border = keys.get(event.key);
        if(cellContainsClass(i, 'clicked') && !cellContainsClass(i, border)) {
            addClassToCell(i, border);
            removeClassFromCell(i, 'clicked');

            if(border === 'border-top' && i >= numOfCols) {
                addClassToCell(i - numOfCols, 'border-bottom');
            }
            else if(border === 'border-bottom' && isCellNoValid(i + numOfCols)) {
                addClassToCell(i + numOfCols, 'border-top');
            }
            else if(border === 'border-left' && (i % numOfCols !== 0)) {
                addClassToCell(i - 1, 'border-right');
            }
            else if(border === 'border-right' && (i % numOfCols) !== numOfCols - 1) {
                addClassToCell(i + 1, 'border-left');
            }

            break;
        }
    }
}

const setTableSize = ( ) => {
    numOfRows = prompt(`Enter number of rows:`, 7);
    if(numOfRows > 15 || numOfRows <= 0) {
        alert('Invalid number of rows. Valid range is [1 - 15]. Setting to default (7)');
        numOfRows = 7;
    }

    numOfCols = prompt(`Enter number of columns:`, 7);
    if(numOfCols > 15 || numOfCols <= 0) {
        alert('Invalid number of columns. Valid range is [1 - 15]. Setting to default (7)');
        numOfCols = 7;
    }
}

const setPlayersName = ( ) => {
    playerOneName = prompt(`Enter name of player one:`, playerOneName);
    playerTwoName = prompt(`Enter name of player two:`, playerTwoName);

    playerElem[0].children[0].innerText = playerOneName;
    playerElem[1].children[0].innerText = playerTwoName;
}

const gameSetup = ( ) => {
    // setTableSize();
    createTable(numOfRows, numOfCols);
    // setPlayersName();
    addEventToCells();
}

const updateScore = (playerNo) => {
    playerElem[playerNo].children[1].innerText = scores[playerNo];
}

switchBtn.addEventListener(
    'click',
    ( ) => {
        activePlayer = (activePlayer + 1) % 2;
        
        if(activePlayer === 0) {
            playerElem[0].children[0].classList.add('active-p1');
            playerElem[1].children[0].classList.remove('active-p2');
        }
        else if(activePlayer === 1) {
            playerElem[1].children[0].classList.add('active-p2');
            playerElem[0].children[0].classList.remove('active-p1');
        }
    }
);

gameSetup();

document.addEventListener(
    'keydown', 
    (event) => {
        addBorderToCells(event);
        changeBoxCellColor();
    }
);