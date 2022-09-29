
// Declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});



// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

//sorts scores object within the allscores array in decending order
allScores.sort((a, b) => {
    return b.score - a.score;
});
console.log(allScores);

// if allscores populated, for loop creates li's
if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].score + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + allScores[i].initials;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});