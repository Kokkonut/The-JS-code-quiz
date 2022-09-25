//Array with all questions and answers, each question with its relevent answers is nested within a OBJECT
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
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    
];


//defining vars for later use (id's refer to index.html & scores.html)
var timerElement = document.querySelector("#timer");
var gStart = document.querySelector("#start-btn");
var splash = document.querySelector("#splash");
var question =document.querySelector("#question");
var quiz = document.querySelector("#QandA")

var score = 0;
var timer;
var timerCount = (quizQandA.length * 10); //15 seconds per quesiton
var answerReal;
var qIndex = 0

var createOl = document.createElement("ol");

function startGame() {
    renderQuestion();
    startTimer();
}


//Starts Timer 
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time " + timerCount;
        if (timerCount <=0) {
            clearInterval(timer);
            endGame()
            timerElement.textContent = "Time's Up"
        } 
    }, 1000);
}

//renders the  question and hides #splash 
function renderQuestion() {
    //hides welcome msg
    splash.setAttribute('style', 'display:none');
    question.textContent = "";
    

    for (var i = 0; i < quizQandA.length; i++) {
        var userQuestion = quizQandA[i].title;
        var userChoices = quizQandA[i].choices;
         answerReal = quizQandA[i].answer;
        //"prints" question to <h2 id="question"
        question.textContent = userQuestion;
    }
    //displays each item in the quizQandA.choices array
    userChoices.forEach(function(item) {
        var userAnswers = document.createElement("li");
        userAnswers.textContent = item;
        quiz.appendChild(createOl);
        createOl.appendChild(userAnswers);
        //executes wrong or right function on click
        userAnswers.addEventListener("click", (wrongOrRight))
    })
  }
    
function wrongOrRight(event) {
    var clickable = event.target;
    if (clickable.matches("li")) {
        var resultDiv = document.createElement("div");
        resultDiv.setAttribute("id", "resultDiv")

        if (clickable.textContent == answerReal) {
            console.log("right")
            score++;
            resultDiv.textContent = "Correct";
        } else {
            timerCount = timerCount - 15;
            console.log("wrong")
            resultDiv.textContent = "Wrong";
        }
    }
    qIndex++;
    if  (qIndex >= quizQandA.length) {
        endGame()
        resultDiv.textContent = "End of quiz, you got" + score;
    } else {
        renderQuestion();
    }


quiz.appendChild(resultDiv);
};

// on game end generates score
function endGame() {
    
};


//adds event listner to start button
gStart.addEventListener("click", startGame);





