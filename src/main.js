'use strict'

const advice = document.querySelector('.advice')
const adviceNumber = document.querySelector('.title span')
const button = document.querySelector('.button')

//console.log({"slip": { "id": 171, "advice": "If you've nothing nice to say, say nothing."}})

function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(res => {
            adviceNumber.textContent = `${res.slip.ip}`
            advice.textContent = `"${res.slip.advice}"`
        })
}

generateAdvice()

button.addEventListener('click', generateAdvice)
