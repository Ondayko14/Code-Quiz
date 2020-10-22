var wrapperEl = document.querySelector("#questions-section");
var startButton = document.querySelector("#start");
var buttonNumber = 0;
var headerSection = document.querySelector("#header-section");
var highScoreWrapper = document.querySelector("#high-score-section");

//clock
var clock = document.querySelector("#clock");
var countDown = parseInt(clock.textContent);

//score
var highScore = {
    score: 0,
    playerName: ""
};
newHighScore = 0;


//Question variables
var question1 = {
    title: "What is a variable?",
    firstC: "A place to store numbers",
    seconedC: "A place to store strings",
    thirdC: "A Javascript Element",
    fourthC: "All of the above",
};

var question2 = {
    title: "What is a string?",
    firstC: "A CSS property",
    seconedC: "A numerical value",
    thirdC: "Text",
    fourthC: "A type of function",
};

var question3 = {
    title: "Which of the following is a boolean value?",
    firstC: "3",
    seconedC: "yes",
    thirdC: "undefined",
    fourthC: "true",
};

var question4 = {
    title: "Which of the following is an img file type?",
    firstC: ".png",
    seconedC: ".ref",
    thirdC: ".href",
    fourthC: ".css",
};

var question5 = {
    title: "What is the internet?",
    firstC: "Cats?",
    seconedC: "Cats?",
    thirdC: "Cats?",
    fourthC: "Cats?",
};
//initial display variable
var initial = {
    title: "Code Quiz",
    description: "Try to answer the questions the best that you can! Press START when you are ready!",
    button: "START"
}

//initial display
var initialDisplay = function() {
    //h1
    var initialTitle = document.createElement("h1");
    initialTitle.className = "opening-h1";
    initialTitle.textContent = initial.title;
    wrapperEl.appendChild(initialTitle);

    //paragraph
    var initialP = document.createElement("p");
    initialP.className = "opening-p";
    initialP.textContent = initial.description;
    wrapperEl.appendChild(initialP);

    //start button
    startButton.className = "start-button";
    startButton.textContent = initial.button;

    //adjust start button to bottom
    startButton.setAttribute("style", "order: 3;");
};

//QUIZ STARTS
//display first question
var questionOne = function(event) {
        //add one to score for inevitable correct answer
        highScore.score++;
        console.log(highScore.score);
        //call clock
    clockHandler();
        //remove initial
    removeInitial();

        //make a title
    var questionTitle = document.createElement("h2");
    questionTitle.className = "question-title";
    questionTitle.textContent = question1.title;
    wrapperEl.appendChild(questionTitle);


        //creates 4 buttons with an id of 0-3
    for (var i = 0; i < 4; i++) {
        var answerButton = document.createElement("button");
        answerButton.setAttribute("id", buttonNumber);
        buttonNumber++;
        wrapperEl.appendChild(answerButton);
    }
        //fill in the buttons
    var firstButton = document.getElementById("0");
    firstButton.textContent = question1.firstC;
    var seconedButton = document.getElementById("1");
    seconedButton.textContent = question1.seconedC;
    var thirdButton = document.getElementById("2");
    thirdButton.textContent = question1.thirdC;
    var fourthButton = document.getElementById("3");
    fourthButton.textContent = question1.fourthC;

        //assign incorrect and correct values
    //correct
    fourthButton.className = "enter-button correct";

    //incorrect
    firstButton.className = "enter-button incorrect";
    seconedButton.className = "enter-button incorrect";
    thirdButton.className = "enter-button incorrect";

        //what to do if incorrect value is selected
    
    firstButton.addEventListener("click", wrongAnswer);
    seconedButton.addEventListener("click", wrongAnswer);
    thirdButton.addEventListener("click", wrongAnswer);

        //what to do if correct value is selected
    fourthButton.addEventListener("click", questionTwo);
};

var questionTwo = function(event) {
    //add one to score for inevitable correct answer
    highScore.score++;
    console.log(highScore.score);
    removeQuestion();
    var buttonNumber = 0;
    //display new question
    //make a title
    var questionTitle = document.createElement("h2");
    questionTitle.className = "question-title";
    questionTitle.textContent = question2.title;
    wrapperEl.appendChild(questionTitle);


        //creates 4 buttons with an id of 0-3
    for (var i = 0; i < 4; i++) {
        var answerButton = document.createElement("button");
        answerButton.setAttribute("id", buttonNumber);
        buttonNumber++;
        wrapperEl.appendChild(answerButton);
    }
        //fill in the buttons
    var firstButton = document.getElementById("0");
    firstButton.textContent = question2.firstC;
    var seconedButton = document.getElementById("1");
    seconedButton.textContent = question2.seconedC;
    var thirdButton = document.getElementById("2");
    thirdButton.textContent = question2.thirdC;
    var fourthButton = document.getElementById("3");
    fourthButton.textContent = question2.fourthC;

        //assign incorrect and correct values
    //correct
    thirdButton.className = "enter-button correct";

    //incorrect
    firstButton.className = "enter-button incorrect";
    seconedButton.className = "enter-button incorrect";
    fourthButton.className = "enter-button incorrect";

        //what to do if incorrect value is selected
    
    firstButton.addEventListener("click", wrongAnswer);
    seconedButton.addEventListener("click", wrongAnswer);
    fourthButton.addEventListener("click", wrongAnswer);

        //what to do if correct value is selected
    thirdButton.addEventListener("click", questionThree);
};

var questionThree = function(event) {
    //add one to score for inevitable correct answer
    highScore.score++;
    console.log(highScore.score);
    removeQuestion();
    var buttonNumber = 0;
    //display new question
    //make a title
    var questionTitle = document.createElement("h2");
    questionTitle.className = "question-title";
    questionTitle.textContent = question3.title;
    wrapperEl.appendChild(questionTitle);


        //creates 4 buttons with an id of 0-3
    for (var i = 0; i < 4; i++) {
        var answerButton = document.createElement("button");
        answerButton.setAttribute("id", buttonNumber);
        buttonNumber++;
        wrapperEl.appendChild(answerButton);
    }
        //fill in the buttons
    var firstButton = document.getElementById("0");
    firstButton.textContent = question3.firstC;
    var seconedButton = document.getElementById("1");
    seconedButton.textContent = question3.seconedC;
    var thirdButton = document.getElementById("2");
    thirdButton.textContent = question3.thirdC;
    var fourthButton = document.getElementById("3");
    fourthButton.textContent = question3.fourthC;

        //assign incorrect and correct values
    //correct
    fourthButton.className = "enter-button correct";

    //incorrect
    firstButton.className = "enter-button incorrect";
    thirdButton.className = "enter-button incorrect";
    seconedButton.className = "enter-button incorrect";

        //what to do if incorrect value is selected
    
    firstButton.addEventListener("click", wrongAnswer);
    thirdButton.addEventListener("click", wrongAnswer);
    seconedButton.addEventListener("click", wrongAnswer);

        //what to do if correct value is selected
    fourthButton.addEventListener("click", questionFour);
};

var questionFour = function(event) {
    //add one to score for inevitable correct answer
    highScore.score++;
    console.log(highScore.score);
    removeQuestion();
    var buttonNumber = 0;
    //display new question
    //make a title
    var questionTitle = document.createElement("h2");
    questionTitle.className = "question-title";
    questionTitle.textContent = question4.title;
    wrapperEl.appendChild(questionTitle);


        //creates 4 buttons with an id of 0-3
    for (var i = 0; i < 4; i++) {
        var answerButton = document.createElement("button");
        answerButton.setAttribute("id", buttonNumber);
        buttonNumber++;
        wrapperEl.appendChild(answerButton);
    }
        //fill in the buttons
    var firstButton = document.getElementById("0");
    firstButton.textContent = question4.firstC;
    var seconedButton = document.getElementById("1");
    seconedButton.textContent = question4.seconedC;
    var thirdButton = document.getElementById("2");
    thirdButton.textContent = question4.thirdC;
    var fourthButton = document.getElementById("3");
    fourthButton.textContent = question4.fourthC;

        //assign incorrect and correct values
    //correct
    firstButton.className = "enter-button correct";

    //incorrect
    seconedButton.className = "enter-button incorrect";
    thirdButton.className = "enter-button incorrect";
    fourthButton.className = "enter-button incorrect";

        //what to do if incorrect value is selected
    
    seconedButton.addEventListener("click", wrongAnswer);
    thirdButton.addEventListener("click", wrongAnswer);
    fourthButton.addEventListener("click", wrongAnswer);

        //what to do if correct value is selected
    firstButton.addEventListener("click", endScreen);
};
//incorrect Answer
 var wrongAnswer = function() {
     console.log("incorrect!");
     //remove 5 secs from clock.textContent
    countDown -= 5;
    if (highScore.score > 0) {
        highScore.score--;
    }
    console.log(highScore.score);
 };

//removes initial display
var removeInitial = function() {
    var initialh1 = document.querySelector(".opening-h1");
    var initialp = document.querySelector(".opening-p");
    var initialbtn = document.querySelector(".start-button");
    initialh1.remove();
    initialp.remove();
    initialbtn.style.display = "none";
};

//removes question
var removeQuestion = function() {
    var button1 = document.getElementById("0");
    var button2 = document.getElementById("1");
    var button3 = document.getElementById("2");
    var button4 = document.getElementById("3");
    var title = document.querySelector(".question-title");
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    title.remove();
};

//removes end screen
var removeEndScreen = function() {
    var endTitleRm = document.getElementById("end-title");
    var endDescriptionRM = document.getElementById("end-description");
    var endInputInfoRM = document.getElementById("endInputValue");
    var submitButtonRM = document.getElementById("submitInput");

    endTitleRm.remove();
    endDescriptionRM.remove();
    endInputInfoRM.remove();
    submitButtonRM.remove();
};

//CLOCK
var clockHandler = function() {
    //turn string into a number.
    //var countDown = parseInt(clock.textContent);
    //move countdown var to global

    //subtracts one from clock.textcontent every seconed
    countDownMethod;
    var countDownMethod = setInterval(function() {
        if (countDown > 0) {
            countDown--;
            clock.textContent = countDown;
        } else {
            endScreen();
            clearInterval(countDownMethod);
        }
    },1000);

    //append clock
    headerSection.appendChild(clock);
};

var stopClock = function() {
    clock.style.display = "none";
};

//END SCREEN
var endScreen = function(event) {
    removeQuestion();
    //stop clock
    stopClock();

    console.log("noice!");
    //h1 title
    var endTitle = document.createElement("h1");
    endTitle.className = "opening-h1";
    endTitle.setAttribute("id", "end-title");
    endTitle.textContent = "Congratulations! Insert a name to see if you beat the high score!";

    //p your score is
    var endDescription = document.createElement("p");
    endDescription.className = "opening-p";
    endDescription.setAttribute("id", "end-description")
    endDescription.textContent = "Your score is " + highScore.score + ".";
    
    //text input
    var endInput = document.createElement("input");
    endInput.setAttribute ("placeholder", "Enter Name Here!");
    endInput.setAttribute ("id", "endInputValue")
    endInput.className = "end-input";

    //submit button
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitInput")
    submitButton.className = "submit-button";
    submitButton.textContent = "Submit";

    //event listener to hear when button is clicked
    submitButton.addEventListener("click", endInputInfo);

    //appends
    wrapperEl.appendChild(endTitle);
    wrapperEl.appendChild(endDescription);
    wrapperEl.appendChild(endInput);
    wrapperEl.appendChild(submitButton);
 };

 var endInputInfo = function() {
     //retrieves info from the input
    var playerNameInput = document.getElementById("endInputValue").value;
    if (!playerNameInput) {
        window.alert("Please insert a name!");
        return highScore.playerName = "ANON";
    } else {
        //inserts name into playerName
    highScore.playerName = playerNameInput;
    console.log(highScore.playerName);

    var checkScore = localStorage.getItem("score");
    var checkScoreNum = parseInt(checkScore);

        if (checkScoreNum < highScore.score) {

            //logs the score and name if score is higher
        localStorage.setItem("score", highScore.score);
        localStorage.setItem("playerName", highScore.playerName);

            //sets message prompt for new high score!
            var message = document.querySelector("#end-title")
            message.textContent = "You set a new high score!"

        showScores();
        debugger;
        //restart();
        } else if (checkScoreNum === highScore.score) {
            //logs the score and name if score is higher
        localStorage.setItem("score", highScore.score);
        localStorage.setItem("playerName", highScore.playerName);

            //sets message prompt for tied your high score!
            var message = document.querySelector("#end-title")
            message.textContent = "You tied your high score!"

        showScores();
        } else if (checkScoreNum > highScore.score) {
            //sets message prompt for tied your did not set a high score.
            var message = document.querySelector("#end-title")
            message.textContent = "You did not set a high score, try again!"

        showScores();
        } else {
            //logs the score and name if score is higher
            localStorage.setItem("score", highScore.score);
            localStorage.setItem("playerName", highScore.playerName);
            
            //sets message prompt for new guy.
            var message = document.querySelector("#end-title")
            message.textContent = "Looks like you're the first one here!"

        showScores();
        }
    }
 };

 var showScores = function() {

     //div
    var scoreBox = document.createElement("div");
    scoreBox.className = "score-box";
    scoreBox.setAttribute ("id", "score-box-div");

    //h2
    scoreBoxTitle = document.createElement("h2");
    scoreBoxTitle.className = "score-title";
    scoreBoxTitle.textContent = "High Score:"

    //ol
    scoreBoxOl = document.createElement("ol");
    scoreBoxOl.className = "score-box-ol";

    //li
    scoreBoxLi = document.createElement("li");
    scoreBoxLi.className = "score-li";

    //retrieve the scores
    var highScoreName = localStorage.getItem("playerName");
    var highScoreScore = localStorage.getItem("score");
    scoreBoxLi.textContent =  highScoreName + " " + highScoreScore + "."

    //appends
    highScoreWrapper.appendChild(scoreBox);
    scoreBox.appendChild(scoreBoxTitle);
    scoreBox.appendChild(scoreBoxOl);
    scoreBoxOl.appendChild(scoreBoxLi);
 };

 var restart = function() {
    //remove endScreen
    document.location.reload ();
 };
initialDisplay();
//events
startButton.addEventListener("click", questionOne);