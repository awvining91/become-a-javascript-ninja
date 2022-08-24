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
        ninjaGrade2();
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
        ["up-stack", "no-stack", "side-stack", "full-stack"], "full-stack"
        ),
    new Question(
        "What language is frequently used with JavaScript?", 
        ["CXB", "CSS","CFF", "CSB"], "CSS"
        )
];





//logic for the questionnaire, used with prototypes, ties in with the functions towards the end of the page
function Test(knowledgeTest) {
    this.grade = 0;
    this.knowledgeTest = knowledgeTest;
    this.testPlace = 0;
}

Test.prototype.getQuestionIndex = function() {
    return this.knowledgeTest[this.testPlace];
}

Test.prototype.guess = function(usersChoice) {
    if(this.getQuestionIndex().isCorrectAnswer(usersChoice)) {
        this.grade++;
    }

    this.testPlace++;
}

Test.prototype.isEnded = function() {
    return this.testPlace === this.knowledgeTest.length;
}


function Question(words, options, usersChoice) {
    this.words = words;
    this.options = options;
    this.usersChoice = usersChoice;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.usersChoice === choice;
}
//
// for the questionnaire logic I got conceptual help from this video https://www.youtube.com/watch?v=bGQ9sIHZdlo all credit to original creator


// This part makes sure the questions show up on the page without (hopefully) breaking
function showTestOption() {

    if(loop.isEnded()) {
        ninjaGrade2();
    }
    else {
        
        let quizContent = document.getElementById("ninja-test");
        quizContent.innerHTML = loop.getQuestionIndex().words;

       
        let options = loop.getQuestionIndex().options;
        for(let i = 0; i < options.length; i++) {
            let shinobiAnswer = document.getElementById("choice" + i);
            shinobiAnswer.innerHTML = options[i];
            decide("btn" + i, options[i]);
        }

        ninjaJourney();
    }
};

function decide(id, decide) {
    let dial = document.getElementById(id);
    dial.onclick = function() {
        loop.guess(decide);
        showTestOption();
    }
};


function ninjaJourney() {
    let answerProgress = loop.testPlace + 1;
    let funTimes = document.getElementById("this-part");
    funTimes.innerHTML = 
    `Question ${answerProgress} of ${loop.knowledgeTest.length}`;
};

function ninjaGrade2() {
    let endMessage = 
    `
    <h1>You did it!</h1>
    <h2 id='grade'> Your ninja level is: ${loop.grade} of ${loop.knowledgeTest.length}</h2>
    <div class="do-it-again?">
        <a href="index.html">Test your ninja javascript knowledge again?</a>
    </div>
    `;
    let questionnaireFun = document.getElementById("quiz");
    questionnaireFun.innerHTML = endMessage;
};

// To figure out how to get the questions to generate I got help from this video https://www.youtube.com/watch?v=bGQ9sIHZdlo all credit to original creator
//Originally I made a questionnaire out of prompts, however this froze the brower and timer so I had to start over :(







let loop = new Test(knowledgeTest);

showTestOption();

//I had to start over many times from scratch on the javascript part of this :(

//I hope you liked my javascript quiz!!!! :)