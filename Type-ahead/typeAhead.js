const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
.then(response => response.json())
.then(data => cities.push(...data));


function filterSearchResult(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function formatPopulationNumbers(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function handleChange() {
    const matchArray = filterSearchResult(this.value, cities);
    suggestions.innerHTML = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${formatPopulationNumbers(place.population)}</span>
            </li>
        `;
    }).join('');
}

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
input.addEventListener('change', handleChange);
input.addEventListener('keyup', handleChange);

