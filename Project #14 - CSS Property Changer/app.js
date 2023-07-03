let blockEl = document.querySelector("#block")
let verticalPosition = document.querySelector("#position-y")
let horizontalPosition = document.querySelector("#position-x")
let blockSize = document.querySelector("#size")
let shapeChanger = document.querySelector("#shape-select")
let shapeChangerBtn = document.querySelector("#ok-btn")
let rgbaR = document.querySelector("#rgba-r")
let rgbaG = document.querySelector("#rgba-g")
let rgbaB = document.querySelector("#rgba-b")
let rgbaA = document.querySelector("#rgba-a")
let rgbaContainer = document.querySelector(".rgba-container")
let rgbaInputs = rgbaContainer.querySelectorAll('input')

verticalPosition.addEventListener("change", () => {
    blockEl.style.top = verticalPosition.value + "px"
})

horizontalPosition.addEventListener("change", () => { 
    blockEl.style.left = horizontalPosition.value + "px"
})

blockSize.addEventListener("change", () => {
    blockEl.style.transform = `scale(${blockSize.value})`
})

shapeChangerBtn.addEventListener("click", () => { 
    let shapeOption = shapeChanger.value
    if (shapeOption === '2') {
        blockEl.style.borderRadius = "50%"
    } else if (shapeOption === '1') { 
        blockEl.style.borderRadius = "0"
    }
})

rgbaInputs.forEach(rgbaInput => { 
    rgbaInput.addEventListener("change", () => { 
        let r = rgbaR.value
        let g = rgbaG.value
        let b = rgbaB.value
        let a = rgbaA.value
        blockEl.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
    })
})