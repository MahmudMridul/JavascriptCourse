'use strict'

const firstNumberElem = document.querySelector('.first-number');
const secondNumberElem = document.querySelector('.second-number');
const addBtn = document.querySelector('.add-btn');
const subBtn = document.querySelector('.sub-btn');
const mulBtn = document.querySelector('.mul-btn');
const divBtn = document.querySelector('.div-btn');
let result = document.querySelector('.result');

const add = function() {
    let first = Number(firstNumberElem.value);
    let second = Number(secondNumberElem.value);
    let addResult = first + second;
    result.innerText = addResult;
}

const sub = function() {
    let first = Number(firstNumberElem.value);
    let second = Number(secondNumberElem.value);
    let subResult = first - second;
    result.innerText = subResult;
}

const mul = function() {
    let first = Number(firstNumberElem.value);
    let second = Number(secondNumberElem.value);
    let mulResult = first * second;
    result.innerText = mulResult;
}

const div = function() {
    let first = Number(firstNumberElem.value);
    let second = Number(secondNumberElem.value);
    let divResult = first / second;
    result.innerText = divResult;
}

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', sub);
mulBtn.addEventListener('click', mul);
divBtn.addEventListener('click', div);
