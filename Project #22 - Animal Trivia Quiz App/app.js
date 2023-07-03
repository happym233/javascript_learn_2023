const start = document.querySelector(".start")
const quiz = document.querySelector(".quiz")
const question = document.querySelector(".question")
const allAnswerChoices = document.querySelectorAll(".choice")
const answerChoiceA = document.getElementById("A")
const answerChoiceB = document.getElementById("B")
const answerChoiceC = document.getElementById("C")
const answerChoiceD = document.getElementById("D")
const counter = document.querySelector(".counter")
const timeGauge = document.querySelector(".time-gauge")
const progressContainer = document.querySelector(".progress-container")
const scoreContainer = document.querySelector(".score-container")

let questions = [
    {
        question: "who am i",
        questionImg: "img/1.jpg",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correctAnswer: "1"
    }, 
    {
        question: "who am i",
        questionImg: "img/2.jpg",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correctAnswer: "1"
    }, 
    {
        question: "who am i",
        questionImg: "img/3.jpg",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correctAnswer: "1"
    }, 
    {
        question: "who am i",
        questionImg: "img/4.jpg",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correctAnswer: "1"
    }, 
    {
        question: "who am i",
        questionImg: "img/5.jpg",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correctAnswer: "1"
    }, 
    {
        question: "who am i",
        questionImg: "img/6.jpg",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correctAnswer: "1"
    }, 
]

const lastQuestion = questions.length - 1
let activeQuestion = 0
let count = 0
let TIMER
let score = 0
const questionTime = 10
const gaugeWidth = 800
const gaugeUnit = gaugeWidth / questionTime

start.addEventListener("click", startQuiz)
allAnswerChoices.forEach(function (clickAnswer) { 
    clickAnswer.addEventListener("click", function (e) { 
        const userAnswer = e.target.innerText
        checkAnswer(userAnswer)
    })
})

function startQuiz() {
    start.style.display = "none"
    renderQuestion()
    quiz.style.visibility = "visible"
    renderProgress()
    renderCounter()
    TIMER = setInterval(renderCounter, 1000)
}

function renderQuestion() { 
    let q = questions[activeQuestion]
    question.innerHTML = `<p>${q.question}</p>`
    answerChoiceA.innerHTML = q.choiceA
    answerChoiceB.innerHTML = q.choiceB
    answerChoiceC.innerHTML = q.choiceC
    answerChoiceD.innerHTML = q.choiceD

    let bodyImg = `url('${q.questionImg}')`
    document.body.style.backgroundImage = bodyImg
}

function renderProgress() { 
    for (let i = 0; i < questions.length; i++) { 
        progressContainer.innerHTML += `<div class='progress-box' id='${i}'></div>`
    }
}

function renderCounter() { 
    if (count <= questionTime) {
        counter.innerHTML = count
        timeGauge.style.width = count * gaugeUnit + "px"
        count++
    } else { 
        answerIsIncorrect()
        nextQuestion()
    }
}

function checkAnswer(answer) { 
    if (answer === questions[activeQuestion].correctAnswer) {
        score++
        answerIsCorrect()
    } else { 
        answerIsIncorrect()
    }
    nextQuestion()
}

function answerIsCorrect() { 
    document.getElementById(activeQuestion).style.backgroundColor = 'green'
}

function answerIsIncorrect() { 
    document.getElementById(activeQuestion).style.backgroundColor = 'red'
}

function nextQuestion() { 
    count = 0
    if (activeQuestion < lastQuestion) {
        activeQuestion++
        renderQuestion()
    } else { 
        clearInterval(TIMER)
        renderScore()
    }
}

function renderScore() { 
    scoreContainer.style.visibility = "visible"
    let scorePercentage = Math.round(100 * score / questions.length)
    scoreContainer.innerHTML = `<h2>Percentage of Correctly Answered Questions: ${scorePercentage}%</h2>`
    scoreContainer.innerHTML += `<h2>Number of Correctly Answered Questions: ${score}</h2>`
}