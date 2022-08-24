window.confirm("Ready to start the Ninja Quiz?")

//this part confuses me
function Test(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Test.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Test.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Test.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
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

// Displaying the question
function displayQuestion() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
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
        displayQuestion();
    }
};


function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
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

// Loop through the array and get the answers
// questions.forEach((answer) => {
//     console.log(answer.choice);
//     let quizAnswers = document.getElementById("quiz-answers");
//     // quizAnswers.innerHTML = questions.text;
// })


// create quiz
let quiz = new Test(questions);

// display quiz
displayQuestion();

// Add A CountDown for the Quiz
let time = .5;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function beginTimer(){
    let quizTimer = setInterval(function(){
    if(quizTime <= 0) {
        clearInterval(quizTimer);
        showScores();
        window.alert("Time's up, you lost ninja!")
    } else {
        quizTime--;
        let sec = Math.floor(quizTime % 60);
        let min = Math.floor(quizTime / 60) % 60;
        counting.innerHTML = `TIME: ${min} : ${sec}`;   
    }
},1000);
}

beginTimer();