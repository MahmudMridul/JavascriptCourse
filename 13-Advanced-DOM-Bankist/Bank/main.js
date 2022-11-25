"use strict"

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = (event) => {
    event.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = ( ) => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(
    (btn) => {
        btn.addEventListener('click', openModal);
    }
);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener(
    'keydown',  
    (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    }
);

///////////////////////////////////////
//Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener(
    'click', 
    (event) => {
        const section1Coordinates = section1.getBoundingClientRect();

        // console.log(section1Coordinates);
        // console.log(window.pageXOffset, window.pageYOffset);
        // console.log(document.documentElement.clientHeight, document.documentElement.clientWidth);

        // No animation
        // window.scrollTo (
        //     section1Coordinates.left + window.pageXOffset, 
        //     section1Coordinates.top + window.pageYOffset
        // );

        // with animation but not working 🙄
        // window.scrollTo({
        //     left : section1Coordinates.left + window.pageXOffset, 
        //     top : section1Coordinates + window.pageYOffset,
        //     behavior : 'smooth'
        // });

        section1.scrollIntoView({
            behavior : 'smooth'
        });
    }
);

