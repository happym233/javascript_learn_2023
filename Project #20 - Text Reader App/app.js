const textDisplay = document.getElementById("text")
const speedBtn = document.getElementById("speed")
const readBtn = document.querySelector(".read")
const pauseBtn = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")
let currentChar

readBtn.addEventListener("click", function () { 
    readText(textDisplay.value)
})

pauseBtn.addEventListener("click", pauseText)

stopBtn.addEventListener("click", stopText)

speedBtn.addEventListener("input", function () { 
    stopText()
    readText(utterance.text.substring(currentChar))
})

const utterance = new SpeechSynthesisUtterance()

utterance.addEventListener("end", function () { 
    textDisplay.disabled = false
})

utterance.addEventListener("boundary", function (e) { 
    currentChar = e.charIndex
})

function readText(disText) { 
    if (speechSynthesis.paused && speechSynthesis.speaking) { 
        return speechSynthesis.resume()
    }

    if (speechSynthesis.speaking) { 
        return
    }

    utterance.text = disText 
    utterance.rate = speedBtn.value || 1
    textDisplay.disabled = true
    speechSynthesis.speak(utterance)

}


function pauseText() { 
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() { 
    console.log(speechSynthesis)
    speechSynthesis.resume()
    speechSynthesis.cancel()
}