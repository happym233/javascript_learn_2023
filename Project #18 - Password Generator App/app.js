const rangeCharacters = document.getElementById("range-char")
const numberCharacters = document.getElementById("number-char")
const formContainer = document.getElementById("password-form")
const numbersEl = document.getElementById("numbers")
const symbolEl = document.getElementById("symbols")
const uppercaseEl = document.getElementById("uppercase")
const passwordDisplay = document.getElementById("password-display")

const lowercaseCharCodes = arrayLowToHigh(97, 122)
const numberCharCodes = arrayLowToHigh(48, 57)
const uppercaseCharCodes = arrayLowToHigh(65, 90)
const symbolCharCodes = arrayLowToHigh(33, 47)
    .concat(arrayLowToHigh(58, 64))
    .concat(arrayLowToHigh(91, 96))
    .concat(arrayLowToHigh(123, 126))

rangeCharacters.addEventListener("input", syncCharacterAmount) 
numberCharacters.addEventListener("input", syncCharacterAmount) 

function syncCharacterAmount(e) { 
    const valueAmount = e.target.value
    rangeCharacters.value = valueAmount
    numberCharacters.value = valueAmount
}

formContainer.addEventListener("submit", (e) => {
    e.preventDefault()

    const characterAmount = numberCharacters.value
    const includeNumbers = numbersEl.checked
    const includeUppercase = uppercaseEl.checked
    const includeSymbols = symbolEl.checked
    const password = generatePassword(
        characterAmount,
        includeUppercase,
        includeNumbers,
        includeSymbols
    )
    passwordDisplay.innerText = password
 })

function arrayLowToHigh(low, high) { 
    let array = []
    for (let i = low; i < high; i++) { 
        array.push(i)
    }
    return array
}

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) { 
    let charCodes = lowercaseCharCodes
    if (includeUppercase) { 
        charCodes = charCodes.concat(uppercaseCharCodes)
    }

    if (includeNumbers) { 
        charCodes = charCodes.concat(numberCharCodes)
    }

    if (includeSymbols) {
        charCodes = charCodes.concat(symbolCharCodes)
     }

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) { 
        let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join("")
}