const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const starsColor = "white";
const starsNumber = 1000;
const size = 0.005; // maximum star size as a fraction of the screen width
const speed = 0.05; // fraction of screen width per second

// Setting up the stars
let stars = []
let starsSpeed = speed * canvasEl.width 
let horizentalVelocity = starsSpeed * randomSign() * Math.random() 
let verticalVelocity = Math.sqrt(Math.pow(starsSpeed, 2) - Math.pow(horizentalVelocity, 2))
                        * randomSign()

for (let i = 0; i < starsNumber; i++) {
  let speedBoost = Math.random() * 2.5 + 0.5
  stars[i] = {
    starRadius: (Math.random() * size * canvasEl.width) / 2,
    horizontalPosition: Math.floor(Math.random() * canvasEl.width),
    verticalPosition: Math.floor(Math.random() * canvasEl.height),
    horizentalVelocity: horizentalVelocity * speedBoost, 
    verticalVelocity: verticalVelocity * speedBoost
  }
}

//--------------------- The Game Loop

// randomSign Function
function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}

let timeDiff, timeLast = 0

requestAnimationFrame(runStars)

function runStars(timeNow) { 
canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height)

  timeDiff = timeNow - timeLast
  timeLast = timeNow

  canvasContext.fillStyle = starsColor
  for (let i = 0; i < starsNumber; i++) { 
    canvasContext.beginPath()
    canvasContext.arc(
      stars[i].horizontalPosition,
      stars[i].verticalPosition,
      stars[i].starRadius,
      0,
      Math.PI * 2
    )
    canvasContext.fill()
    stars[i].horizontalPosition +=
      stars[i].horizentalVelocity * timeDiff * 0.001

    if (stars[i].horizontalPosition < 0 - stars[i].starRadius) {
      stars[i].horizontalPosition = canvasEl.width + stars[i].starRadius
    } else if (stars[i].horizontalPosition > canvasEl.width + stars[i].starRadius) { 
      stars[i].horizontalPosition = 0 - stars[i].starRadius
    }

    stars[i].verticalPosition +=
      stars[i].verticalVelocity * timeDiff * 0.001

    if (stars[i].verticalPosition < 0 - stars[i].starRadius) {
      stars[i].verticalPosition = canvasEl.height + stars[i].starRadius
    } else if (stars[i].verticalPosition > canvasEl.height + stars[i].starRadius) { 
      stars[i].verticalPosition = 0 - stars[i].starRadius
    }
  }

  requestAnimationFrame(runStars)
}
