'use strict'

let winningScore = 10;

// winningScore = prompt(`Set winning score: `, 100);

const NUMBER_OF_PLAYERS = 2;
let activePlayer = 0;
let totalScores = [];
let currScores = [];

const playerElem = document.getElementsByClassName('player');
const currScoresElem = document.getElementsByClassName('current');
const totalScoresElem = document.getElementsByClassName('score');

const diceElem = document.getElementsByClassName('dice')[0];
const holdBtn = document.getElementsByClassName('btn--hold')[0];
const rollBtn = document.getElementsByClassName('btn--roll')[0];
const newBtn = document.getElementsByClassName('btn--new')[0];

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const updateCurrScoreTextContent = (activePlayer, valueToBeSet) => {
    currScoresElem[activePlayer].children[1].textContent = valueToBeSet;
}

const updateTotalScoreTextContent = (activePlayer, valueToBeSet) => {
    totalScoresElem[activePlayer].innerHTML = valueToBeSet;
}

const setPlayerAsWinner = (playerNumber) => {
    playerElem[playerNumber].classList.add('player--winner');
}

const unsetPlayerAsWinner = (playerNumber) => {
    playerElem[playerNumber].classList.remove('player--winner');
}

const setPlayerAsActive = (playerNumber) => {
    playerElem[playerNumber].classList.add('player--active');
}

const setPlayerAsInactive = (playerNumber) => {
    playerElem[playerNumber].classList.remove('player--active');
}

const setScores = ( ) => {
    for(let i = 0; i < NUMBER_OF_PLAYERS; ++i) {
        totalScores.push(0);
        currScores.push(0);
    }
}

const resetAllScoresElem = ( ) => {
    for(let p = 0; p < NUMBER_OF_PLAYERS; ++p) {
        updateCurrScoreTextContent(p, 0);
        updateTotalScoreTextContent(p, 0);
    }
}

const resetAllPlayerStatus = ( ) => {
    for(let p = 0; p < NUMBER_OF_PLAYERS; ++p) {
        unsetPlayerAsWinner(p);
        setPlayerAsInactive(p);
    }
}

const setGame = ( ) => {
    setScores();
    resetAllScoresElem();
    resetAllPlayerStatus();
    setPlayerAsActive(0);
}

const checkForWinner = ( ) => {
    if(totalScores[activePlayer] + currScores[activePlayer] >= winningScore) {
        totalScores[activePlayer] += currScores[activePlayer];
        updateTotalScoreTextContent(activePlayer, totalScores[activePlayer]);
        setPlayerAsWinner(activePlayer);
        holdBtn.disabled = true;
        rollBtn.disabled = true;
    }
}

const toggleActivePlayer = ( ) => {
    let nextActivePlayer = (activePlayer + 1) % NUMBER_OF_PLAYERS;
    setPlayerAsInactive(activePlayer);
    setPlayerAsActive(nextActivePlayer);
    activePlayer = nextActivePlayer;
}

const updateScoreForHold = ( ) => {
    totalScores[activePlayer] += currScores[activePlayer];
    currScores[activePlayer] = 0;
    updateCurrScoreTextContent(activePlayer, currScores[activePlayer]);
    updateTotalScoreTextContent(activePlayer, totalScores[activePlayer]);
    toggleActivePlayer();
}

const updateScoreForDiceOne = ( ) => {
    currScores[activePlayer] = 0;
    updateCurrScoreTextContent(activePlayer, currScores[activePlayer]);
}

const calculateCurrentScore = (diceNo) => {
    if(diceNo === 1) {
        updateScoreForDiceOne();
        toggleActivePlayer();
        return;
    }
    currScores[activePlayer] += diceNo;
    updateCurrScoreTextContent(activePlayer, currScores[activePlayer]);
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

    activePlayer = 0;
    setGame();

    holdBtn.disabled = false;
    rollBtn.disabled = false;
}

setGame();

holdBtn.addEventListener('click', updateScoreForHold);
rollBtn.addEventListener('click', rollDice);
newBtn.addEventListener('click', startNewGame);