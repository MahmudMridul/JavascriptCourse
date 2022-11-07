'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let inputNumber = 0;
let score = Number(document.querySelector('.score').textContent);
let checkBtnPressCount = 0;

console.log(`secret number is ${secretNumber}`);

checkBtn.addEventListener(
    'click', 
    () => {

        ++checkBtnPressCount;
        console.log(checkBtnPressCount);

        if(checkBtnPressCount >= 10) {
            document.querySelector('.message').textContent = `You lose!`;    
            document.querySelector('.guess').value = '';
            document.querySelector('.number').textContent = '?';
            document.querySelector('body').style.backgroundColor = '#C10505';
            document.querySelector('.check').disabled = true;
            return;
        }

        inputNumber = Number(document.querySelector('.guess').value);
        
        if(!inputNumber) {
            document.querySelector('.message').textContent = `No Number! 😢`;
        }
        else if(inputNumber == secretNumber) {
            document.querySelector('.message').textContent = `CORRECT!!! 😁`;
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#17B169';
            document.querySelector('.check').disabled = true;
        }
        else if(inputNumber > secretNumber) {
            document.querySelector('.message').textContent = `Try smaller numbers 🤔`;
            --score;
            document.querySelector('.score').textContent = score;
        }
        else if(inputNumber < secretNumber) {
            document.querySelector('.message').textContent = `Try larger numbers 🤔`;
            --score;
            document.querySelector('.score').textContent = score;
        }
    }
);

againBtn.addEventListener (
    'click', 
    () => {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        checkBtnPressCount = 0;
        document.querySelector('.message').textContent = `Start guessing...`;
        document.querySelector('.guess').value = '';
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.check').disabled = false;
        console.log(`secret number is ${secretNumber}`);
    }
);