"use strict"
// Button
const btn = document.getElementById('btn');

// Div above the button --> Displays results
const resultsContainer = document.getElementById('results');
let results = document.getElementById('score')
let score = 0

// Nodelist of all the questions
const questions = document.querySelectorAll('input[type="radio"]');

// Event handler for button click
btn.addEventListener('click', () => {
    const validation = document.getElementById('validation');
    if (! getQuestion().checked) {
        validation.textContent = 'Please answer YES or NO for each question'
    } else {
        validation.textContent = '';
        getScore();
        displayScore()
    }
}); 

// Gets score
function getScore() {
    // Looping through each question and incrememnts score
    for (const question of questions) {
        if (question.checked && question.value === 'yes') {
           score++;
        };
    };
};

// Gets a single question
function getQuestion (){
    for (const question of questions){
        return question
    };
};

// Displays score based on certain conditions
function displayScore() {
    if (score === 0) {
        btn.style.display = 'none';
        resultsContainer.style.display = 'block';
        results.textContent = `You scored ${score}`;
    } else if (score >= 1 && score <= 5) {
        btn.style.display = 'none';
        resultsContainer.style.display = 'block';
        results.textContent = `You scored ${score}`;
    } else if (score >= 6 && score <= 10) {
        btn.style.display = 'none';
        resultsContainer.style.display = 'block';
        results.textContent = `You scored ${score}`;
    } else if (score >= 11 && score <= 15) {
        btn.style.display = 'none';
        resultsContainer.style.display = 'block';
        results.textContent = `You scored ${score}`;
    } else if (score >= 16 && score <= 20) {
        btn.style.display = 'none';
        resultsContainer.style.display = 'block';
        results.innerHTML = `You scored ${score}`;
    }
};