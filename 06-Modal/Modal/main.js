'use strict'

let modalVisible = false;

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalsBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

const showModal = ( ) => {
    modalVisible = true;
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hideModal = ( ) => {
    modalVisible = false;
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < showModalsBtn.length; ++i) {
    showModalsBtn[i].addEventListener ('click', showModal);
}

closeModalBtn.addEventListener ('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener (
    'keydown',
    (event) => {
        if(event.key === 'Escape' && modalVisible) {
            hideModal();
        }
        else if(event.key === 't' && modalVisible) {
            hideModal();
        }
        else if(event.key === 't' && !modalVisible) {
            showModal();
        }
    }
);