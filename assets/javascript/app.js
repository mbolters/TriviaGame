// objects for questions and answers in an array

let questions = [
    {
    question: "How much do i love you",
    answers: ["Tons", "Alot", "A bunch", "oodles"],
    correctAnswer: 2
    },
    {
    question: "who is my favorite person",
    answers: ["You", "My Bebe", "Marie", "My Baby"],
    correctAnswer: 3
    },
    {
    question: "Where is my favorite place",
    answers: ["Next to you", "With you", "Anywhere you are", "Where ever you wanna be"],
    correctAnswer: 1
    },
    {
    question: "question 4",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: 4
    },
    {
    question: "question 5",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: 2   
    }
];
let currQuestion = -1;
let correctScore = 0;
let incorrectScore = 0;
let unanswered = 0;
let clickable = false;
let counter = 5;
let interval;



function timer(){
    interval= setInterval(function () {
        if (--counter === 0) {
            $(".timer").text("You're out of time!");
            clearInterval(interval);
            reset();
            $("#answerOne").text(" The correct answer was: "+ questions[currQuestion].correctAnswer);
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
            $("#answerOne").text(" The correct answer was: "+ questions[currQuestion].correctAnswer); 
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
    setTimeout(nextQuestion, 1000 *3);
    counter = 5;
}

function end (){
    $("#question").text("All Done! How did you do?");
    $("#answerOne").text("Correct Answers: " + correctScore);
    $("#answerTwo").text("Incorrect Answers: " + incorrectScore);
    $("#answerThree").text("Unanswered: " + unanswered);
    $("#answerFour").text("");
    $(".timer").text("Time Remaining: " + counter);
    $("#startOver").append("<a class= \"btn btn-primary btn-lg font\" href=\"#\" role=\"button\">Start Over!</a>");  
    correctScore = 0;
    incorrectScore = 0;
    unanswered = 0;
    currQuestion= -1;
}

$("#startOver").on("click", function(){
    nextQuestion(); 
    $('#startOver').remove()
});



$("#answerOne").click(function(){answer(1)});
$("#answerTwo").click(function(){answer(2)});
$("#answerThree").click(function(){answer(3)});
$("#answerFour").click(function(){answer(4)});


