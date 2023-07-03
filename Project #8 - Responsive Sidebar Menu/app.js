const hamBtn = document.querySelector('.toggle-btn')
const mainHeader = document.querySelector('.main-header')
const overlay = document.querySelector('.overlay')

hamBtn.addEventListener('click', () => { 
        hamBtn.classList.toggle('open')
        mainHeader.classList.toggle('open')
        overlay.classList.toggle('open')   
    }
)