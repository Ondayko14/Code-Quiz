var wrapperEl = document.querySelector("#questions-section");
var startButton = document.querySelector("#start");
var buttonNumber = 0;
var headerSection = document.querySelector("#header-section");

//clock
var clock = document.querySelector("#clock");
var countDown = parseInt(clock.textContent);

//score
var score = 0;
var playerName = ""


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
        score++;
        console.log(score);
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
    score++;
    console.log(score);
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
    score++;
    console.log(score);
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
    score++;
    console.log(score);
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
    if (score > 0) {
        score--;
    }
    console.log(score);
 };

//removes initial display
var removeInitial = function() {
    var initialh1 = document.querySelector(".opening-h1");
    var initialp = document.querySelector(".opening-p");
    var initialbtn = document.querySelector(".start-button");
    initialh1.remove();
    initialp.remove();
    initialbtn.remove();
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
        }
    },1000);

    //append clock
    headerSection.appendChild(clock);
}

//END SCREEN
var endScreen = function(event) {
    removeQuestion();
    console.log("noice!");
    //h1 title
    var endTitle = document.createElement("h1");
    endTitle.className = "opening-h1";
    endTitle.textContent = "Congratualtions!";

    //p your score is
    var endDescription = document.createElement("p");
    endDescription.className = "opening-p";
    endDescription.textContent = "Your score is " + score + ".";
    
    //text input
    var endInput = document.createElement("input");
    endInput.setAttribute ("placeholder", "Enter Name Here!");
    endInput.className = "end-input";

    //submit button
    var submitButton = document.createElement("button");
    submitButton.className = "submit-button";
    submitButton.textContent = "Submit";



    //appends
    wrapperEl.appendChild(endTitle);
    wrapperEl.appendChild(endDescription);
    wrapperEl.appendChild(endInput);
    wrapperEl.appendChild(submitButton);

 };
initialDisplay();
//events
startButton.addEventListener("click", questionOne);