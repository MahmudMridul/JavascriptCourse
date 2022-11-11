'use strict'

let winningScore = 100;

winningScore = prompt(`Set winning score: `, 100);

let playerZeroActive = true;

let playerZeroCurrScore = 0;
let playerZeroTotalScore = 0;

let playerOneCurrScore = 0;
let playerOneTotalScore = 0;

const playerZeroTotalScoreElem = document.getElementById('score--0');
const playerZeroElem = document.getElementsByClassName('player--0')[0];
const playerZeroCurrScoreElem = document.getElementById('current--0');

const playerOneElem = document.getElementsByClassName('player--1')[0];
const playerOneTotalScoreElem = document.getElementById('score--1');
const playerOneCurrScoreElem = document.getElementById('current--1');

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
    let winnerFound = false;
    if(playerZeroTotalScore + playerZeroCurrScore >= winningScore) {
        winnerFound = true;
        playerZeroTotalScore += playerZeroCurrScore;

        playerZeroTotalScoreElem.innerText = playerZeroTotalScore;
        playerZeroElem.classList.add('player--winner');
        
    }
    else if(playerOneTotalScore + playerOneCurrScore >= winningScore) {
        winnerFound = true;
        playerOneTotalScore += playerOneCurrScore;

        playerOneTotalScoreElem.innerText = playerOneTotalScore;
        playerOneElem.classList.add('player--winner');
        
    }

    if(winnerFound) {
        holdBtn.disabled = true;
        rollBtn.disabled = true;
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

        playerZeroTotalScoreElem.innerText = playerZeroTotalScore;
        playerZeroCurrScoreElem.innerText = playerZeroCurrScore;
    }
    else {
        playerOneTotalScore += playerOneCurrScore;
        playerOneCurrScore = 0;

        playerOneTotalScoreElem.innerText = playerOneTotalScore;
        playerOneCurrScoreElem.innerText = playerOneCurrScore;
    }
    switchPlayer();
}

const updateScoreForDiceOne = ( ) => {
    if(playerZeroActive) {
        playerZeroCurrScore = 0;
        playerZeroCurrScoreElem.innerText = playerZeroCurrScore;
    }
    else {
        playerOneCurrScore = 0;
        playerOneCurrScoreElem.innerText = playerOneCurrScore;    
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
        playerZeroCurrScoreElem.innerText = playerZeroCurrScore;
    }
    else {
        playerOneCurrScore += diceNo;
        playerOneCurrScoreElem.innerText = playerOneCurrScore;
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
    winningScore = prompt(`Set winning score: `, 100);

    playerZeroActive = true;
    playerZeroCurrScore = 0;
    playerZeroTotalScore = 0;
    playerOneCurrScore = 0;
    playerOneTotalScore = 0;

    playerZeroCurrScoreElem.innerText = '0';
    playerZeroTotalScoreElem.innerText = '0';
    playerOneCurrScoreElem.innerText = '0';
    playerOneTotalScoreElem.innerText = '0';

    playerOneElem.classList.remove('player--active');
    playerZeroElem.classList.add('player--active');
    playerOneElem.classList.remove('player--winner');
    playerZeroElem.classList.remove('player--winner');

    holdBtn.disabled = false;
    rollBtn.disabled = false;
}

holdBtn.addEventListener('click', updateScoreForHold);
rollBtn.addEventListener('click', rollDice);
newBtn.addEventListener('click', startNewGame);