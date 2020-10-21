var wrapperEl = document.querySelector("#questions-section");
var startButton = document.querySelector("#start");
var buttonNumber = 0;


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
var questionsStart = function(event) {
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
    fourthButton.addEventListener("click", correctAnswer);
};

//correct Answer
var correctAnswer = function() {
    console.log("correct!");
};
//incorrect Answer
 var wrongAnswer = function() {
     console.log("incorrect!");
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


initialDisplay();
//events
startButton.addEventListener("click", questionsStart);