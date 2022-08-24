//Hello and welcome to my humble ninja javascript quiz! I hope you like it! :D

window.confirm("Ready to start the Ninja Quiz?")


//var ninja = 0;
//var superSet {x,y};


// Here is the timer for the questionnaire
let clock = .5;
let ninjaMinute = clock * 60 * 60;
let testTotalTime = ninjaMinute / 60;

let ninjaCount = document.getElementById("timer-box");

function ninjaClock(){
    let ninjaCountDown = setInterval(function(){
    if(testTotalTime <= 0) {
        clearInterval(ninjaCountDown);
        showScores();
        window.alert("Time's up, you lost ninja!")
    } else {
        testTotalTime--;
        let second = Math.floor(testTotalTime % 60);
        let minute = Math.floor(testTotalTime / 60) % 60;
        ninjaCount.innerHTML = `TIME: ${minute} : ${second}`;   
    }
},1000);
}

ninjaClock();

// for the timer I got conceptual help from this video https://www.youtube.com/watch?v=bGQ9sIHZdlo all credit to original creator


//These are the javascript quiz questions
let knowledgeTest = [
    new Question(
        "Who created JavaScript?", 
        ["Maynard Keenan", "Dave Dramain","Brendan Eich", "Adam Jones"], "Brendan Eich"
    ),
    new Question(
        "What is jQuery?", 
        ["API", "JSON", "PHP", "A cool rapper"], "API"
    ),
    new Question(
        "Where is JavaScript used?", 
        ["AI tools", "robotics","websites", "cryptocurrencies"], "websites"
        ),
    new Question(
        "What type of language is Javascript?", 
        ["up-stack", "no-stack", "side-end", "full-stack"], "full-stack"
        ),
    new Question(
        "What language is frequently used with JavaScript?", 
        ["CXB", "CSS","CFF", "CSB"], "CSS"
        )
];





//logic for the questionnaire, used with prototypes
function Test(knowledgeTest) {
    this.grade = 0;
    this.knowledgeTest = knowledgeTest;
    this.testPlace = 0;
}

Test.prototype.getQuestionIndex = function() {
    return this.knowledgeTest[this.testPlace];
}

Test.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.grade++;
    }

    this.testPlace++;
}

Test.prototype.isEnded = function() {
    return this.testPlace === this.knowledgeTest.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
//
// for the questionnaire logic I got conceptual help from this video https://www.youtube.com/watch?v=bGQ9sIHZdlo all credit to original creator


// This part shows the questions
function showTestOption() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

       
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        showTestOption();
    }
};


function showProgress() {
    let currentQuestionNumber = quiz.testPlace + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.knowledgeTest.length}`;
};

function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
    <h2 id='grade'> Your ninja level is: ${quiz.grade} of ${quiz.knowledgeTest.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Test your ninja javascript knowledge again?</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// To figure out how to get the questions to generate I got help from this video https://www.youtube.com/watch?v=bGQ9sIHZdlo all credit to original creator
//Originally I made a questionnaire out of prompts, however this froze the brower and timer so I had to start over :(







let quiz = new Test(knowledgeTest);

showTestOption();

//I had to start over many times from scratch on the javascript part of this :(