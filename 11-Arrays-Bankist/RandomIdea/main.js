'use strict'

const boxElem = document.getElementsByClassName('box')[0];
let left = 0;
let up = 0;

console.log(boxElem);

const move = (event) => {
    if(event.key === 'w') {
        up -= 10;
        boxElem.style.top = `${up}px`;
    }
    else if(event.key === 's') {
        up += 10;
        boxElem.style.top = `${up}px`;
    }
    else if(event.key === 'a') {
        left -= 10;
        boxElem.style.left = `${left}px`;
    }
    else if(event.key === 'd') {
        left += 10;
        boxElem.style.left = `${left}px`;
    }
}

document.addEventListener('keydown', move);