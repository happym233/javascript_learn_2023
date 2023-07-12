const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

const FPS = 60
let radius = 50
let xP, yP
let xV, yV

xP = canvasEl.width / 2
yP = canvasEl.height / 2 

xV = Math.floor(Math.random() * 201 + 99) / FPS
yV = Math.floor(Math.random() * 201 + 99) / FPS

if (Math.random() * 2 < 1) { 
    xV = -xV
}

if (Math.random() * 2 < 1) {
    yV = -yV
}

function runGame() { 
    xP += xV
    yP += yV
    canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height)

    if (yV > 0 && yP >= canvasEl.height - radius) { 
        yV = -yV
    }

    if (yV < 0 && yP <= radius) { 
        yV = -yV
    }

    if (xV > 0 && xP >= canvasEl.width - radius) { 
        xV = -xV
    }

    if (xV < 0 && xP <= radius) { 
        xV = -xV
    }

    canvasContext.beginPath()
    canvasContext.fillStyle = 'orange'
    canvasContext.arc(xP, yP, radius, 0, Math.PI * 2)
    canvasContext.fill()
}

setInterval(runGame, 1000 / FPS)