'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(country) {
    const html = `
    <article class="country">
        <img class="country__img" src="${country.flag}" />
        <div class="country__data">
            <h3 class="country__name">${country.name}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${country.population}</p>
            <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
        </div>
    </article>`;
    
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryData = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener(
        'load',
        function() {
            const data = JSON.parse(this.responseText);
            const country = data[0];
            console.log(country);
            renderCountry(country)
        }
    );
    
}


const country = 'bangladesh';

const request = fetch(`https://restcountries.com/v2/name/${country}`);

request.then(
    function(response) {
        return response.json();
    }
).then(
    function(data) {
        console.log(data[0]);
    }
);

fetch(`https://restcountries.com/v2/name/${country}`).then(
    (response) =>  response.json().then(
        (data) => {
            console.log(data);
        }
    )
);

fetch(`https://restcountries.com/v2/name/${country}`).then(
    (response) => response.json().then(
        (data) => renderCountry(data[0])
    )
);