//defining vars for later use (id's refer to index.html & scores.html)
let timerElement = document.querySelector("#timer")
let qSpace = document.querySelector("#question")
let aSpace = document.querySelector("#answers")
let gStart = document.querySelector("start-btn")

//Global Vars
let timer;
let activeQuestion;

//Array with all questions and answers, each question with its relevent answers is nested within a OBJECT
const quizQandA = [
    {
        "question": "place holder question",
        "answer-1": "placeh holder answer demo correct",
        "answer-A": "placeh holder answer demo wrong",
        "answer-B": "placeh holder answer demo wrong",
        "answer-C": "placeh holder answer demo wrong"
    },
    {
        "question": "2 place holder question",
        "answer-1": "2 placeh holder answer demo correct",
        "answer-A": "2 placeh holder answer demo wrong",
        "answer-B": "2 placeh holder answer demo wrong",
        "answer-C": "2 placeh holder answer demo wrong"
    },
    {
        "question": "3 place holder question",
        "answer-1": "3 placeh holder answer demo correct",
        "answer-A": "3 placeh holder answer demo wrong",
        "answer-B": "3 placeh holder answer demo wrong",
        "answer-C": "3 placeh holder answer demo wrong"
    }
];
//Starts game on btn click, nested functions
function startGame(){

};

//Starts Timer 
function startTimer(){

};

//makes questions display in random order
function randomQuestion() {
    let activeQuestion = quizQandA;
    for (var i = 0; i < activeQuestion.length; i++) { 
        activeQuestion[activeQuestion.length] = Math.floor(Math.random() * activeQuestion.length) + 1;
    };
    return activeQuestion;

}

//renders the  question and hides #splash 
function renderQuestion() {

};

//renders 4 possible answers
function answerQuestion() {

};

function wrongOrRight() {

};

// on game end generates score
function endGame() {
    
};


//adds event listner to start button
//gStart.addEventListener("click", startGame);

//TESTING REMEMBER TO DELETE
console.log("active question " + activeQuestion);

randomQuestion();