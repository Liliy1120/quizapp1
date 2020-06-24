//'use strict';

// Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
// Users should be asked questions 1 after the other.
// Users should only be prompted with 1 question at a time.
// Users should not be able to skip questions.
// Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
// Upon submitting an answer, users should:
// receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
// be moved onto the next question (or interact with an element to move on).
// Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
// Users should be able to start a new quiz.

let questionNumber = 0;

// The starting screen should have a button that users can click to start the quiz.
    function startQuiz() {
        $('.start').on("click", function(){
            $('.startpage').addClass("hide")
            $('.question').removeClass("hide")
            //update question number
            $('.qnum').text(questionNumber + 1);
        });
    };
// show question number and score
    function scoreBoard() {
        $(".start").on("click", function(){
            $(".score").removeClass("hide");
        })
    }

//update question number
    function updateQuestionNumber(){
        $('.check').on('click', function(){
            $('.qnum').text(questionNumber + 1);
        });
    };

//check the submitted answer 
    function checkAnswer() {
        $('.check').on('click',function(event){
            event.preventDefault();
            let selectedAnswer = $('input:checked');
            let selectAns = selectedAnswer.val();
            //let correctAnsw = STORE.[questionNumber].answer;

            if (selectedAnswer === correctAnsw) {
                correctAns();
            } else {
                wrongAns();
            }
        })
    }

    function correctAns(){
        $('correct').removeClass('hide');
    }

    function wrongAns(){
        $('wrong').removeClass('hide');
    }



//render next question 
//I want the index number to connect to the question number 
// so whatever question number is displayed i want it to match the index number

   
    //function nextQuestion() {
       // $('.check').on('click', function(){
    

    function initQuiz() {
        startQuiz();
        scoreBoard();
        checkAnswer() 
    }

    $(initQuiz);