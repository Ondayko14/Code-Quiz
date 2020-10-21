var wrapperEl = document.querySelector("#questions-section");


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
    var initialStart = document.createElement("button");
    initialStart.className = "start-button";
    initialStart.textContent = initial.button;
    wrapperEl.appendChild(initialStart);
};

//questions start
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
wrapperEl.addEventListener("click", removeInitial);