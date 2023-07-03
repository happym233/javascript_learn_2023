let list = document.querySelector('.list')
let imgs = Array.from(list.children)
const nextBtn = document.querySelector('.btn-right')
const prevBtn = document.querySelector('.btn-left')

const imgWidth = imgs[0].getBoundingClientRect().width

function setImgPosition(img, index) { 
    img.style.left = imgWidth * index + 'px'
}

imgs.forEach(setImgPosition)

const moveToImg = (list, currentImg, nextImg) => { 
    list.style.transform = `translateX(-${nextImg.style.left})`
    currentImg.classList.remove('current-img')
    nextImg.classList.add('current-img')
}

const hideShowArrows = (imgs, prevBtn, nextBtn, targetIdx) => { 
    if (targetIdx === 0) {
        prevBtn.classList.add("hidden")
        nextBtn.classList.remove("hidden")
    } else if (targetIdx === imgs.length - 1) {
        nextBtn.children.add("hidden")
        prevBtn.classList.remove("hidden")
    } else { 
        nextBtn.classList.remove("hidden")
        prevBtn.classList.remove("hidden")
    }
}

nextBtn.addEventListener('click', () => { 
    const currentImg = list.querySelector('.current-img')
    const nextImg = currentImg.nextElementSibling;
    const nextIdx = imgs.findIndex((img) => img === nextImg )
    hideShowArrows(imgs, prevBtn, nextBtn, nextIdx)
    moveToImg(list, currentImg, nextImg)
})


prevBtn.addEventListener('click', () => { 
    const currentImg = list.querySelector('.current-img')
    const prevImg = currentImg.previousElementSibling;
    const prevIdx = imgs.findIndex((img) => img === prevImg )
    hideShowArrows(imgs, prevBtn, nextBtn, prevIdx)
    moveToImg(list, currentImg, prevImg)
})