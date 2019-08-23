// objects for questions and answers in an array

let questions = [
    {
    question: "question 1",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: 2
    },
    {
    question: "question 2",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: 3
    },
    {
    question: "question 3",
    answers: ["answer1", "answer2", "answer3", "answer4"],
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

/*timer {
    mark out of time as unanswered
}*/

// BUGS:
// - timer start is longer than one second
// - you can still click answer boxes when they arent visible
// - hide start button after you start the game
// - array keeps going

let correctScore = 0;
let incorrectScore = 0;
let unanswered = 0;

let counter = 5;
let interval;

let timer = function(){
    interval= setInterval(function () {
        $(".timer").text("Time Remaining: " + counter);
        if (--counter === -1) {
            $(".timer").text("You're out of time!");
            clearInterval(interval);
            reset();
            $("#answerOne").text(" The correct answer was: "+ questions[currQuestion].correctAnswer);
            unanswered++;
        }
        }, 1000);
    }

function nextQuestion() {
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

nextQuestion();

function answer (answerNumber){
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

function reset (){
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
}


$("#answerOne").click(function(){answer(1) });
$("#answerTwo").click(function(){answer(2) });
$("#answerThree").click(function(){answer(3) });
$("#answerFour").click(function(){answer(4) });


