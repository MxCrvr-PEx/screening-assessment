"use strict"

const btn = document.getElementById('submit');
const questions = document.querySelectorAll('input[type=radio]');
const resultBox = document.getElementById('result-box');
const result = document.getElementById('result');
let score = 0;
const validation = document.getElementById('validation');

btn.addEventListener('click', () => {
    getScore();
    displayScore();
});

// function getValidation() {
   
// };

function getScore() {
    for (const question of questions) {
        if (question.checked && question.value === '1') {
            score += 1;
        } else if (question.checked && question.value === '2') {
            score += 2;
        } else if (question.checked && question.value === '3') {
            score += 3;
        }
    };
    return score;
};

function displayScore () {
    const questionsList = document.getElementById('questions-list');
    questionsList.style.display = 'none';
    btn.style.display = 'none';
    if (score === 0) {
        result.innerText = `You scored ${score}`;
    } else if (score >= 1 && score <= 13) {
        result.innerText = `You scored ${score} (1st Quartile)`
    } else if (score >=14 && score <= 21) {
        result.innerText = `You scored ${score} (2nd Quartile)`
    } else if (score >=22 && score <= 30) {
        result.innerText = `You scored ${score} (3rd Quartile)`
    } else if (score >= 31 && score <= 47) {
        result.innerText = `You scored ${score} (4th Quartile)`
    };
};