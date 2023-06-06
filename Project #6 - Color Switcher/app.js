const body = document.body
const switchBtn = document.querySelector('.switch')
const switchParas = document.querySelector('.color')

switchBtn.addEventListener('click', () => { 
    let r = getRandomNumber()
    let g = getRandomNumber()
    let b = getRandomNumber()
    const colorStr = `rgb(${r}, ${g}, ${b})`
    switchParas.innerText = colorStr
    body.style.backgroundColor = colorStr
})

function getRandomNumber() { 
    return Math.floor(Math.random() * 256)
}