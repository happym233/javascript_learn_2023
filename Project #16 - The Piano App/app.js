const BOARD_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BOARD_BLACK_KEYS = ['s', 'd', 'f', 'g', 'h']

const keys = document.querySelectorAll('.key')
const blackKeys = document.querySelectorAll('.key.black')
const whiteKeys = document.querySelectorAll('.key.white')
keys.forEach(key => {
    key.addEventListener('click', () => { 
        playNote(key)
    })
})

const playNote = (key) => { 
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => { 
        key.classList.remove('active')
    })
}

document.addEventListener('keydown', (e) => { 
    let key = e.key
    let whiteKeyIdx = BOARD_WHITE_KEYS.indexOf(key)
    if (whiteKeyIdx >= 0) { 
        playNote(whiteKeys[whiteKeyIdx])
    }

    let blackKeyIdx = BOARD_BLACK_KEYS.indexOf(key)
    if (blackKeyIdx >= 0) { 
        playNote(blackKeys[blackKeyIdx])
    }
})