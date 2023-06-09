const searchInput = document.querySelector('.search')
const suggestionContainer = document.querySelector('.suggestions')

searchInput.addEventListener("change", displayMatches)
searchInput.addEventListener("keyup", displayMatches)

const citiesStates = []

fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
).then((response) => response.json()).then(responseData => citiesStates.push(...responseData))

function findMatches(wordToMatch, citiesStates) { 
    const regX = new RegExp(wordToMatch, "gi")
    return citiesStates.filter(citiesState => { 
        let place = citiesState.city
        let state = citiesState.state
        return place.match(regX) || state.match(regX)
    })
}

function displayMatches() { 
    const findArray = findMatches(this.value, citiesStates)
    const matchEl = findArray.map((place) => { 
        const regX = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regX,
            `<span class="highlight">${this.value}</span>`)

        const stateName = place.state.replace(regX,
            `<span class="highlight">${this.value}</span>`)

        return `<li class="name">${cityName}, ${stateName}</li>`
    })
    suggestionContainer.innerHTML = matchEl
}