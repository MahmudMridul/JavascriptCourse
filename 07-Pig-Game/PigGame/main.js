'use strict'

let playerZeroActive = true;

let playerZeroCurrScore = 0;
let playerZeroTotalScore = 0;

let playerOneCurrScore = 0;
let playerOneTotalScore = 0;

const scoreZeroElem = document.getElementById('score--0');
const playerZeroElem = document.getElementsByClassName('player--0')[0];
const currentZeroElem = document.getElementById('current--0');

const playerOneElem = document.getElementsByClassName('player--1')[0];
const scoreOneElem = document.getElementById('score--1');
const currentOneElem = document.getElementById('current--1');

const diceElem = document.getElementsByClassName('dice')[0];

const holdBtn = document.getElementsByClassName('btn--hold')[0];
const rollBtn = document.getElementsByClassName('btn--roll')[0];
const newBtn = document.getElementsByClassName('btn--new')[0];

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkForWinner = ( ) => {
    if(playerZeroTotalScore >= 100) {
        playerZeroElem.classList.add('player--winner');
    }
    else if(playerOneTotalScore >= 100) {
        playerOneElem.classList.add('player--winner');
    }
}

const switchPlayer = ( ) => {
    if(playerZeroActive) {
        playerZeroElem.classList.remove('player--active');
        playerOneElem.classList.add('player--active');
        playerZeroActive = false;
    }
    else {    
        playerOneElem.classList.remove('player--active');
        playerZeroElem.classList.add('player--active');
        playerZeroActive = true;
    }
}

const updateScoreForHold = ( ) => {
    if(playerZeroActive) {
        playerZeroTotalScore += playerZeroCurrScore;
        playerZeroCurrScore = 0;

        scoreZeroElem.innerText = playerZeroTotalScore;
        currentZeroElem.innerText = playerZeroCurrScore;
    }
    else {
        playerOneTotalScore += playerOneCurrScore;
        playerOneCurrScore = 0;

        scoreOneElem.innerText = playerOneTotalScore;
        currentOneElem.innerText = playerOneCurrScore;
    }
    switchPlayer();
}

const updateScoreForDiceOne = ( ) => {
    if(playerZeroActive) {
        playerZeroCurrScore = 0;
        currentZeroElem.innerText = playerZeroCurrScore;
    }
    else {
        playerOneCurrScore = 0;
        currentOneElem.innerText = playerOneCurrScore;    
    }
}

const calculateCurrentScore = (diceNo) => {

    if(diceNo === 1) {
        updateScoreForDiceOne();
        switchPlayer();
        return;
    }

    if(playerZeroActive) {
        playerZeroCurrScore += diceNo;
        currentZeroElem.innerText = playerZeroCurrScore;
    }
    else {
        playerOneCurrScore += diceNo;
        currentOneElem.innerText = playerOneCurrScore;
    }

    checkForWinner();
}

const rollDice = ( ) => {
    let diceNo = getRandomInt(1, 6);
    let imageSrc = `dice-${diceNo}.png`;
    diceElem.attributes[0].nodeValue = imageSrc;
    calculateCurrentScore(diceNo);
}

const startNewGame = ( ) => {
    
}

holdBtn.addEventListener('click', updateScoreForHold);
rollBtn.addEventListener('click', rollDice);
newBtn.addEventListener('click', startNewGame());