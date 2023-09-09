'use strict'

const advice = document.querySelector('.advice')
const adviceNumber = document.querySelector('.title span')
const button = document.querySelector('.button')

function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(res => {
            adviceNumber.textContent = `#${res.slip.id}`
            advice.textContent = `"${res.slip.advice}"`
        })
}

generateAdvice()

button.addEventListener('click', generateAdvice)
