const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

canvasEl.height = 600;
canvasEl.width = 800;

let xP = 400
let yP = 300
let radius = 50
let speed = 10

let upDir = false
let downDir = false
let leftDir = false
let rightDir = false


document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

function runGame() { 
    requestAnimationFrame(runGame)

    canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height)

    arrowInputs()

    drawBall()
}

function collisionDetection() { 
    if (yP <= radius && upDir) { 
        return true
    }

    if (xP <= radius && leftDir) { 
        return true
    }

    if (yP >= canvasEl.height - radius && downDir) { 
        return true
    }

    if (xP >= canvasEl.width - radius && rightDir) { 
        return true
    }

    return false
}

function arrowInputs() { 
    if (collisionDetection()) return

    if (upDir) { 
        yP = yP - speed
    }

    if (downDir) { 
        yP = yP + speed
    }

    if (leftDir) { 
        xP = xP - speed
    }

    if (rightDir) { 
        xP = xP + speed
    }
}

function drawBall() { 
    canvasContext.fillStyle = 'white'
    canvasContext.beginPath()
    canvasContext.arc(xP, yP, radius, 0, Math.PI * 2)
    canvasContext.fill()
}

function keyDown(e) { 
    if (e.keyCode === 38) { 
        upDir = true
    }

    if (e.keyCode === 40) { 
        downDir = true
    }

    if (e.keyCode === 37) { 
        leftDir = true
    }

    if (e.keyCode === 39) { 
        rightDir = true
    }

}

function keyUp(e) { 
    if (e.keyCode === 38) { 
        upDir = false
    }

    if (e.keyCode === 40) { 
        downDir = false
    }

    if (e.keyCode === 37) { 
        leftDir = false
    }

    if (e.keyCode === 39) { 
        rightDir = false
    }
}

runGame()