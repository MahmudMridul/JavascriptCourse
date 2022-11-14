'use strict'

const player = document.getElementsByClassName('player');
console.log(player[0].classList);
player[0].classList.add('player-winner');
console.log(player[0].classList);



// const currScores = document.getElementsByClassName('current');
// currScores[1].children[1].textContent = 100;
// console.log(currScores[1].children[1].textContent);
// console.log(currScores[0].children[1].textContent);

// const totalScores = document.getElementsByClassName('score');
// totalScores[0].innerHTML = 100;
// console.log(totalScores[0].innerHTML)