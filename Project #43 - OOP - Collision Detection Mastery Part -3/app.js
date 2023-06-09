const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

let mouseEffect = {
    x: undefined,
    y: undefined
}

let maxRadium = 50
let minRadium = 5

window.addEventListener("mousemove", (e) => { 
    mouseEffect.x = e.x
    mouseEffect.y = e.y
})

class Ball { 
    constructor(xP, yP, xV, yV, radius, red, green, blue) { 
        this.xP = xP
        this.yP = yP
        this.xV = xV
        this.yV = yV
        this.radius = radius
        this.originRaius = radius
        this.red = red
        this.green = green
        this.blue = blue
    }

    drawBall = function () { 
        canvasContext.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`
        canvasContext.beginPath()
        canvasContext.arc(this.xP, this.yP, this.radius, 0, Math.PI * 2)
        canvasContext.fill()
    }

    updateBall = function () { 
        if (this.xP + this.radius >= canvasEl.width || this.xP - this.radius <= 0) { 
            this.xV = -this.xV
        }

        if (this.yP + this.radius >= canvasEl.height || this.yP - this.radius <= 0) { 
            this.yV = -this.yV
        }

        this.xP += this.xV
        this.yP += this.yV

        if (mouseEffect.x - this.xP < 20 &&
            mouseEffect.x - this.xP > -20 &&
            mouseEffect.y - this.yP < 20 &&
            mouseEffect.y - this.yP > -20
        ) {
            if (this.radius < maxRadium) {
                this.radius += 1
            }
        } else { 
            if (this.radius > this.originRaius) { 
                this.radius -= 1
            }
        }
    }
}

let ballsArray = []
for (let i = 0; i < 500; i++) { 
    let radius = Math.random() * 10 + 5
    let xP = Math.floor(Math.random() * (canvasEl.width - 2 * radius)) + radius
    let yP = Math.floor(Math.random() * (canvasEl.height - 2 * radius)) + radius
    let xV = (Math.random() - 0.5) * 2
    let yV = (Math.random() - 0.5) * 2
    let red = Math.ceil(Math.random() * 255)
    let green = Math.ceil(Math.random() * 255)
    let blue = Math.ceil(Math.random() * 255)

    ballsArray.push(new Ball(xP, yP, xV, yV, radius, red, green, blue))
}

function animateBalls() { 
    canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height)

    for (let i = 0; i < ballsArray.length; i++) { 
        ballsArray[i].drawBall()
        ballsArray[i].updateBall()
    }
    requestAnimationFrame(animateBalls)
}

animateBalls()