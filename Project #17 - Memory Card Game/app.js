const cards = document.querySelectorAll(".memory-card")

let cardIsFlipped = false
let lockBoard = false
let firstCard, secondCard

function flipCard() { 
    if (lockBoard) { 
        return 
    }
    if (this === firstCard) { 
        return
    } 
    this.classList.add('flip')
    if (!cardIsFlipped) {
        cardIsFlipped = true
        firstCard = this 
        return
    }  
    secondCard = this 
    checkForMatch(firstCard, secondCard)
   
}

function checkForMatch(firstCard, secondCard) { 
    let isMatched = firstCard.dataset.name === secondCard.dataset.name
    isMatched ? disableCards() : unflipCards()
}

function disableCards() { 
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetBoard()
}

function resetBoard() { 
    cardIsFlipped = false
    lockBoard = false
    firstCard = null
    secondCard = null
}

(function shuffle() { 
    cards.forEach(function (card) { 
        let randomPositions = Math.floor(Math.random() * 12)
        card.style.order = randomPositions
    })
})()

function unflipCards() { 
    lockBoard = true
    setTimeout(() => { 
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        lockBoard = false
        resetBoard()
    }, 1000)
}

cards.forEach(function(card) {
    card.addEventListener('click', flipCard)
})
