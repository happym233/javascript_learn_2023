/*
Public API Repo
https://github.com/public-apis/public-apis
*/

let cat = document.querySelector('.cat')
let dog = document.querySelector('.dog')
let fox = document.querySelector('.fox')

const catBtn = document.querySelector('.get-cat')
const dogBtn = document.querySelector('.get-dog')
const foxBtn = document.querySelector('.get-fox')

catBtn.addEventListener('click', getRandomCat)
dogBtn.addEventListener('click', getRandomDog)
foxBtn.addEventListener('click', getRandomFox)

function getRandomCat() { 
    fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json())
        .then(responseData => { 
            cat.innerHTML = `<img src="${responseData.message}" />`
        })
}

getRandomCat()

function getRandomDog() { 

}

function getRandomFox() { 

}