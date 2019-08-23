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
let currQustion = -1;

/*timer {

    when time is up
    same logic as if a wrong answer was sellected
    stop when answer selected
    or show correct answer when out of time
    mark out of time as unanswered
}*/

var counter = 5;
var interval = setInterval(function() {
    $(".timer").text(counter);
    counter--;
    console.log(counter);
    if (counter == 0) {
        clearInterval(interval);

    }
}, 1000);


function reset() {
    currQustion++;
    // WE ARE POPULATING QUESTION N
    $("#question").text(questions[currQustion].question);
    $("#answerOne").text(questions[currQustion].answers[0]);
    $("#answerTwo").text(questions[currQustion].answers[1]);
    $("#answerThree").text(questions[currQustion].answers[2]);
    $("#answerFour").text(questions[currQustion].answers[3]);
};

reset();

function answer (answerNumber){
    
    if(questions[currQustion].correctAnswer === answerNumber){
        //correct answer
        $('#question').text("Correct!");
        $("#answerOne").text("");
        $("#answerTwo").text("");
        $("#answerThree").text("");
        $("#answerFour").text("");
        setTimeout(reset, 1000 *3);
      
    } else {
        // wrong answer
        $("#question").text("Incorrect!");
        $("#answerOne").text(" The correct answer was: "+ questions[currQustion].correctAnswer);
        $("#answerTwo").text("");
        $("#answerThree").text("");
        $("#answerFour").text("");
        setTimeout(reset, 1000 * 3);
        

    }

}

$("#answerOne").click(function(){answer(1) });
$("#answerTwo").click(function(){answer(2) });
$("#answerThree").click(function(){answer(3) });
$("#answerFour").click(function(){answer(4) });


