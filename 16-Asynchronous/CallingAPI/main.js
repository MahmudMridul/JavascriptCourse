'use strict'

const container = document.querySelector('.container');

const renderCountries = (countries) => {
    let html = `
    <table class="table table-light table-striped">
        <tr>
            <th> Name </td>
            <th> Alpha3Code </td>
            <th> Region </td>
            <th> Timezone </td>
        </tr>`;

    for(let i = 0; i < countries.length; ++i) {
        html += `
        <tr>
            <td> ${countries[i].name} </td>
            <td> ${countries[i].alpha3Code} </td>
            <td> ${countries[i].region} </td>
            <td> ${countries[i].timezones} </td>
        </tr>
        `;
    }

    html += `</table>`;
    container.insertAdjacentHTML('beforeend', html);
}

fetch(`https://restcountries.com/v2/all`).then(
    response => response.json().then(
        data => {
            console.log(data[10].currencies[0].name);
            renderCountries(data);
        }
    )
)