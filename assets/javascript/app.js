// objects for questions and answers in an array
$(document).ready(function(){

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

function populateTrivia(n) {

    $("#question").text(questions[n].question);
    $("#answerOne").text(questions[n].answers[0]);
    $("#answerTwo").text(questions[n].answers[1]);
    $("#answerThree").text(questions[n].answers[2]);
    $("#answerFour").text(questions[n].answers[3]);
};
populateTrivia(0);

});

// document.getElementById ("guessedWord").textContent = guessedWord ; 