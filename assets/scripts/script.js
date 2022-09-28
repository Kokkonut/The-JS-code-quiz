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
var question = document.querySelector('#question');




//Vars for created elements needed across various functions
var createDiv = document.createElement('div');
var createDiv_game = document.createElement('div');
var createH1 = document.createElement('h1');
var createButton = document.createElement('button');
var createUl = document.createElement('ul');
var createWelcome = document.createElement('h1');
var viewHiScores = document.createElement('button');
var timerCountdown = document.createElement('h4');
var questionRender = document.createElement('h4');
var answersRender = document.createElement("ol");

//Hoisted Vars
var score = 0;
var timer;
var timerCount = (quizQandA.length * 10); //15 seconds per quesiton
var answerReal;
var qIndex = 0;

function startTimer(){
//query selector to selct timer h3 created with gamestart()
    var timertimer = document.querySelector("#timer-count");

    timer = setInterval(function() {
        timerCount--;
        timertimer.textContent = "Time Left " + timerCount;
        if (timerCount <=0) {
            clearInterval(timer);
            endGame()
            timerCount.textContent = "Time's Up"
        } 
    }, 1000);
}



function gameStart() {


//Hides welcome txt and button
    createDiv.style.display = 'none';
//Creates new div for gameboard
    createDiv_game.setAttribute('id', 'gameDiv');
    wrapper.appendChild(createDiv_game);
// creates div within gameboard for header
    var gameHeader = document.createElement('div');
        gameHeader.setAttribute('id', 'gameHeader');
        createDiv_game.appendChild(gameHeader);
// Adds view hi score button to game header
        viewHiScores.setAttribute('id', 'hiscores-btn');
        viewHiScores.textContent = "View Hi Scores"
        gameHeader.appendChild(viewHiScores);
        

// Adds timer element to header
        timerCountdown.setAttribute('id', 'timer-count');
        timerCountdown.textContent = 'Time left: ' + timerCount;
        gameHeader.appendChild(timerCountdown);

//creates addition div to nest question and answers 
    var qaDiv = document.createElement('div');
        qaDiv.setAttribute('id', 'qaDiv');
        createDiv_game.appendChild(qaDiv);

    //creates space for question on gameboard
        qaDiv.setAttribute('id', 'questionRender');
        qaDiv.appendChild(questionRender);

//creates space for answers on gameboard
        qaDiv.appendChild(answersRender);
        
        startTimer();
        renderQuestion();
};



function displaySpalsh() {
//creates new wrapper for welcome text and start button
        createDiv.setAttribute('id', 'splashDiv');
        wrapper.appendChild(createDiv);

//creates h1 to display game instructions
        createWelcome.setAttribute('id', 'splash-h1');
        createWelcome.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time/score by 15 seconds";
        createDiv.appendChild(createWelcome);

//creates game start button
    var createButton = document.createElement('button');
        createButton.setAttribute('id', 'start-btn');
        createButton.textContent = 'start game';
        createDiv.appendChild(createButton);

//Adds event listener to start button
    var gStart = document.querySelector("#start-btn");
    gStart.addEventListener("click", gameStart);
};


function renderQuestion() {
       answersRender.innerHTML = "";
       questionRender.innerHTML = "";
    

       for (var i = 0; i < quizQandA.length;  i++) {
            var userQuestion = quizQandA[qIndex].title;
            var userChoices = quizQandA[qIndex].choices;
            answerReal = quizQandA[qIndex].answer;
//"prints" question to <h2 id="question"
           questionRender.textContent = userQuestion;                              
       };
//displays each item in the quizQandA.choices array
       userChoices.forEach(function(item) {
        var userAnswers = document.createElement("li");
            userAnswers.textContent = item;
            questionRender.appendChild(userAnswers);
           //executes wrong or right function on click
           userAnswers.addEventListener("click", (answerQuestion))
       })
};



function answerQuestion(event) {
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

function endGame() {
    questionRender.innerHTML = "";
    answersRender.innerHTML = "";
    //result.innerHTML = "";

   
    var resultsH1 = document.createElement("h1");
    resultsH1.setAttribute("id", "resultsH1");
    resultsH1.textContent = "All Done!"

    createDiv_game.appendChild(resultsH1);


    if (timerCount >= 0) {
        clearInterval(timer);
        var timescore = timerCount + score;
        var resultsP2 =document.createElement("p");
        resultsP2.textContent = "Your final score is: " + timescore;
            wrapper.appendChild(resultsP2);
    } else {
        clearInterval(timer);
        var timescore = timerCount + timescore;
        var resultsP2 =document.createElement("p");
        resultsP2.textContent = "Your final score is: " + score;
        createDiv_game.appendChild(resultsP2);
    }

        // Label
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";
    
        createDiv_game.appendChild(createLabel);
    
        // input
        var initialsInput = document.createElement("input");
        initialsInput.setAttribute("type", "text");
        initialsInput.setAttribute("id", "initials");
        initialsInput.textContent = "";
    
        createDiv_game.appendChild(initialsInput);
    
        // submit
        var initialsSubmit = document.createElement("button");
        initialsSubmit.setAttribute("type", "submit");
        initialsSubmit.setAttribute("id", "submit");
        initialsSubmit.textContent = "Submit";
    
        createDiv_game.appendChild(initialsSubmit);

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

function score() {

};

function enterInitials() {

};

function renderScores() {
    window.location.replace("./scores.html");
};

function clearScores() {

};

function returnHome() {

};

displaySpalsh();
var hiScore = document.querySelector('#hiscores-btn')
hiScore.addEventListener('click', renderScores)
