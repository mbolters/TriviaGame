// objects for questions and answers in an array

let questions = [
    {
    question: "What is the most common type of star found in the Milky Way?",
    answers: ["Brown Dwarf", "Red dwarf", "Blue Giant", "Red Giant"],
    correctAnswer: 2
    },
    {
    question: "What is the closest star to the Sun?",
    answers: ["Spica", "Vega", "Proxima", "Rigel"],
    correctAnswer: 3
    },
    {
    question: "What is the brightest star that can be seen in Earth's night sky?",
    answers: ["Regulus", "Sol", "Polaris", "Sirius"],
    correctAnswer: 4
    },
    {
    question: "How are new stars born?",
    answers: ["From colliding comets", "No one knows", "They appear from thin air", "From clouds of gas and dust"],
    correctAnswer: 4
    },
    {
    question: "What is a binary system?",
    answers: ["Two stars which orbit a common center of gravity ", "A star with two centers of gravity", "Two stars which appear close together in the sky", "Two stars in the same constellation"],
    correctAnswer: 1   
    }
];
let currQuestion = -1;
const timePerQuestion = 30;
let correctScore = 0;
let incorrectScore = 0;
let unanswered = 0;
let clickable = false;
let counter = timePerQuestion;
let interval;



function timer(){
    interval= setInterval(function () {
        if (--counter === 0) {
            $(".timer").text("You're out of time!");
            clearInterval(interval);
            reset();
            $("#answerOne").text(" The correct answer was: "+ questions[currQuestion].answers[questions[currQuestion].correctAnswer -1]);
            unanswered++;
        }else{
            $(".timer").text("Time Remaining: " + counter);
        }
    }, 1000);
}

$("#startBtn").on("click", function(){nextQuestion(); $('#startBtn').remove()});

function nextQuestion() {
    clickable=true;
    currQuestion++;
    if (currQuestion < questions.length){
        $("#question").text(questions[currQuestion].question);
        $("#answerOne").text(questions[currQuestion].answers[0]);
        $("#answerTwo").text(questions[currQuestion].answers[1]);
        $("#answerThree").text(questions[currQuestion].answers[2]);
        $("#answerFour").text(questions[currQuestion].answers[3]);
        clearInterval(interval);
        timer();
        $(".timer").text("Time Remaining: " + counter);
    }else {
        end();
    }

}


function answer (answerNumber){
    if (clickable){
        clearInterval(interval);
        if(questions[currQuestion].correctAnswer === answerNumber){
            //correct answer
            $('#question').text("Correct!");
            reset();
            correctScore++;

        } else {
            // wrong answer
            $("#question").text("Incorrect!");
            reset();
            $("#answerOne").text(" The correct answer was: "+ questions[currQuestion].answers[questions[currQuestion].correctAnswer -1]);
            incorrectScore++;

        }

    }
}

function reset (){
    clickable=false;
    $("#answerOne").text("");
    $("#answerTwo").text("");
    $("#answerThree").text("");
    $("#answerFour").text("");
    setTimeout(nextQuestion, 1000 *2);
    counter = timePerQuestion;
}

function end (){
    $("#question").text("All Done! How did you do?");
    $("#answerOne").text("Correct Answers: " + correctScore);
    $("#answerTwo").text("Incorrect Answers: " + incorrectScore);
    $("#answerThree").text("Unanswered: " + unanswered);
    $("#answerFour").text("");
    $(".timer").text("Time Remaining: " + counter);
    $("#startOver").append("<a class= \"btn btn-primary btn-lg font\" id = \"startOverBtn\" href=\"#\" role=\"button\">Start Over!</a>");  
    correctScore = 0;
    incorrectScore = 0;
    unanswered = 0;
    currQuestion= -1;
}

$("#startOver").on("click", function(){
    nextQuestion(); 
    $('#startOverBtn').remove()
});



$("#answerOne").click(function(){answer(1)});
$("#answerTwo").click(function(){answer(2)});
$("#answerThree").click(function(){answer(3)});
$("#answerFour").click(function(){answer(4)});


