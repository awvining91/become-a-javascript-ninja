

document.querySelector('#generate').addEventListener('click', promptMe2);

function promptMe2() {

    var questions = [
        {
            prompt: "What HTML tag do you use to link your javascript file to your html file?\n(a) <script>\n\(b) <jscript>\n(c) <javascript>",
            answer: "a"
        },
        {
            prompt: "Who created Javascript?\n(a) David Draiman\n(b) Maynard Keenan\n(c) Brendan Eich",
            answer: "c"
        },
        {
            prompt: "How do you comment in Javascript?\n(a) //\n\(b) <!--\n(c) --",
            answer: "a"
        }
    
    
    ];
    
        var score = 0;
    
        //used this video as reference for questionnaire section https://youtu.be/LQGTb112N_c
    
        for(var i=0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt);
        if(response == questions[i].answer){
            score++;
            alert("Correct!");
        } else {
            alert("WRONG! Time deducted!");
        }
    
    }
    
        alert("You got "+ score + "/" + questions.length + " question(s) right!");
        alert("Game Over Ninja!");
        alert("You can now add your intials and score in the ninja hall of rememberance!");
        alert("Click on the 'Enter score & initials' button!");
    //used this as reference for for loop for questionnaie https://www.youtube.com/watch?v=LQGTb112N_c


}

document.querySelector('#initials').addEventListener('click', storeScoreInitials);

function storeScoreInitials(){

        var highScore = String(window.prompt
            ("Enter your ninja score!",""));
        alert ("You picked: " + highScore + "!");

        var yourInitials = String(window.prompt
           ("Enter your ninja initials!",""));
        alert ("You picked: " + yourInitials + "!");

        var initialsPlusScore = yourInitials.concat(' ',highScore);
        alert ("Thanks! Here is today's top ninja: " + initialsPlusScore + "!");
        
        


    }