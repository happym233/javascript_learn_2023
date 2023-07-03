const fullImg = document.querySelector('.full-img')
const smallImgs = document.querySelectorAll('.gallery img')
const modal = document.querySelector('.modal')

smallImgs.forEach(img => {
    img.addEventListener('click',  () => { 
        modal.classList.add('open')
        const imgNum = img.getAttribute('alt')
        fullImg.setAttribute('src', `img/full/${imgNum}.jpg`)
        fullImg.setAttribute('alt', `${imgNum}`)
    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open')
    }
})