'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let inputNumber = 0;
let checkBtnPressCount = 0;

let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');

console.log(`secret number is ${secretNumber}`);

checkBtn.addEventListener(
    'click', 
    () => {

        ++checkBtnPressCount;
        inputNumber = Number(document.querySelector('.guess').value);
        
        console.log(checkBtnPressCount);

        if(checkBtnPressCount >= 10) {
            document.querySelector('.message').textContent = `You lose!`;    
            document.querySelector('.guess').value = '';
            document.querySelector('.number').textContent = '?';
            document.querySelector('body').style.backgroundColor = '#C10505';
            document.querySelector('.check').disabled = true;
            return;
        }
        
        if(!inputNumber) {
            document.querySelector('.message').textContent = `No Number! 😢`;
        }
        else if(inputNumber == secretNumber) {
            document.querySelector('.message').textContent = `CORRECT!!! 😁`;
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#17B169';
            document.querySelector('.check').disabled = true;

            if(score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        else if(inputNumber > secretNumber) {
            --score;

            document.querySelector('.message').textContent = `Try smaller numbers 🤔`;
            document.querySelector('.score').textContent = score;
        }
        else if(inputNumber < secretNumber) {
            --score;

            document.querySelector('.message').textContent = `Try larger numbers 🤔`;
            document.querySelector('.score').textContent = score;
        }
    }
);

againBtn.addEventListener (
    'click', 
    () => {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        checkBtnPressCount = 0;
        score = 20;

        document.querySelector('.message').textContent = `Start guessing...`;
        document.querySelector('.guess').value = '';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = '20';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.check').disabled = false;

        console.log(`secret number is ${secretNumber}`);
    }
);