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
];


//defining vars for later use (id's refer to index.html & scores.html)
var timerElement = document.querySelector("#timer");
var gStart = document.querySelector("#start-btn");
var splash = document.querySelector("#splash");
var question =document.querySelector("#question");
var quiz = document.querySelector("#QandA")
var wrapper = document.querySelector(".wrapper")
var result = document.querySelector("#resultDiv")

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
function renderQuestion(qindex) {
    //hides welcome msg
    splash.setAttribute('style', 'display:none');

    createOl.innerHTML = "";
    question.innerHTML = "";
    

    for (var i = 0; i < quizQandA.length; i++) {
        var userQuestion = quizQandA[qIndex].title;
        var userChoices = quizQandA[qIndex].choices;
         answerReal = quizQandA[qIndex].answer;
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
        //var resultDiv = document.createElement("div");
        //resultDiv.setAttribute("id", "resultDiv")

        if (clickable.textContent == answerReal) {
            score++;
            resultDiv.textContent = "Correct";
        } else {
            timerCount = timerCount - 15;
            resultDiv.textContent = "Wrong";
        }
    }
    qIndex++;

    if  (qIndex >= quizQandA.length) {
        endGame()
        //resultDiv.textContent = "End of quiz, you got" + score;
    } else {

        renderQuestion();
    }


wrapper.appendChild(resultDiv);
};

// on game end generates score
function endGame() {
    question.innerHTML = "";
    quiz.innerHTML = "";
    result.innerHTML = "";

   
    var resultsH1 = document.createElement("h1");
    resultsH1.setAttribute("id", "resultsH1");
    resultsH1.textContent = "All Done!"

    quiz.appendChild(resultsH1);

//not doing anything right now
    var resultsP = document.createElement("p");
    resultsP.setAttribute("id", "resultsP")

    quiz.appendChild(resultsP);

    if (timerCount >= 0) {
        clearInterval(timer);
        var timescore = timerCount + score;
        var resultsP2 =document.createElement("p");
        resultsP2.textContent = "Your final score is: " + timescore;
            quiz.appendChild(resultsP2);
    } else {
        clearInterval(timer);
        var timescore = timerCount + timescore;
        var resultsP2 =document.createElement("p");
        resultsP2.textContent = "Your final score is: " + score;
            quiz.appendChild(resultsP2);
    }

        // Label
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";
    
        quiz.appendChild(createLabel);
    
        // input
        var initialsInput = document.createElement("input");
        initialsInput.setAttribute("type", "text");
        initialsInput.setAttribute("id", "initials");
        initialsInput.textContent = "";
    
        quiz.appendChild(initialsInput);
    
        // submit
        var initialsSubmit = document.createElement("button");
        initialsSubmit.setAttribute("type", "submit");
        initialsSubmit.setAttribute("id", "submit");
        initialsSubmit.textContent = "Submit";
    
        quiz.appendChild(initialsSubmit);

        initialsSubmit.addEventListener("click", function() {
            var Userinitials = initialsInput.value;

            if (Userinitials === null) {
    
                console.log("No value entered!");
    
            } else {
                var finalScore = {
                    initials: Userinitials,
                    score: timescore
                }
                console.log(finalScore);
                var allScores = localStorage.getItem("allScores");
                if (allScores === null) {
                    allScores = [];
                } else {
                    allScores = JSON.parse(allScores);
                }
                allScores.push(finalScore);
                var newScore = JSON.stringify(allScores);
                localStorage.setItem("allScores", newScore);
                // Travels to final page
                window.location.replace("./scores.html");
            }

        });
};




//adds event listner to start button
gStart.addEventListener("click", startGame);
