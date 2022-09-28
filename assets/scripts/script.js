var quizQandA = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
];
//Query Selectors
var wrapper = document.querySelector('#wrapper');


//Vars for created elements needed across various functions
var createDiv = document.createElement('div');
var createH1 = document.createElement('h1');
var createButton = document.createElement('button');
var createUl = document.createElement('ul');

//Hoisted Vars
var timer;
var timerCount = (quizQandA.length * 10); //15 seconds per quesiton


function gameStart() {

    createDiv.style.display = 'none';
    console.log('working');

    createDiv.classList.add('gameDiv');
    wrapper.appendChild(createDiv);

};

function displaySpalsh() {
    //creates new wrapper for welcome text and start button
    createDiv.classList.add('splashDiv');
    wrapper.appendChild(createDiv);
    //creates h1 to display game instructions
    var createWelcome = document.createElement('h1');
        createWelcome.classList.add('splash-h1');
        createWelcome.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time/score by 15 seconds";
        createDiv.appendChild(createWelcome);
    var createButton = document.createElement('button');
        createButton.classList.add('start-btn');
        createButton.textContent = 'start game';
        createDiv.appendChild(createButton);
gameStart();
};



function randomQuestion() {

};

function renderQuestion() {

};

function timer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time " + timerCount;
        if (timerCount <=0) {
            clearInterval(timer);
            endGame()
            timerElement.textContent = "Time's Up"
        } 
    }, 1000);
};

function answerQuestion() {  

};

function score() {

};

function enterInitials() {

};

function renderScores() {

};

function clearScores() {

};

function returnHome() {

};

displaySpalsh();