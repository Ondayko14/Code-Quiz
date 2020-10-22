# Code-Quiz
HTML, CSS, and JavaScript

## How it works
Simply load up the website, press start, and answer the questions. Lose 5 seconds and a point for every wrong answer, gain a point for every correct answer. Cannot score less than 0, so don't feel to bad. End score will appear at the end of the quiz. Quiz will end when the clock strikes 0 or all questions have been answered correctly (There are only four). Current Highscore will appear after name insertion.

###Deployed Application
https://ondayko14.github.io/Code-Quiz/index

### Screen Shots

![Opening page says Code Quiz with a button that says start.](/assets/imgs/Screenshot1.png)
![List of four questions is displayed and a timer](/assets/imgs/Screenshot2.png)
![End screen with a New High Score message and a display of the current leader](/assets/imgs/Screenshot3.png)

### Troubles Along The Way
The clock handling was quite difficult for me to figure out. I learned how to use setInterval and clearInterval in this project(Both of which took me far too long to discover). Scope on the clock became an issue when I decided to penalize the user by 5 seconds, so I had to do some refractoring and reimagination of the clock functions interactions with the incorrectAnswer function. Overall this code is far to bulky for what it is currently, so I will be returning shortly to refactor further. (specifically the question objs are huge. If i insert them into an array and iterate thru it, then I can get rid of a significant chunk of techincal debt)

