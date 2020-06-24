//'use strict';
// The starting screen should have a button that users can click to start the quiz.
// Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
// Users should be asked questions 1 after the other.
// Users should only be prompted with 1 question at a time.
// Users should not be able to skip questions.
// Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
// Upon submitting an answer, users should:
//          receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
//          be moved onto the next question (or interact with an element to move on).
// Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
// Users should be able to start a new quiz.

const STORE = {
    questions: [//1
      {
        question: "What are heading elements for?",
        options: [
          "It tells where the head of a document is", 
          "For styling purposes", 
          "To establish information hierarachy", 
          "To establish authority"
        ],
        answer: "To establish information hierarachy"
      },


    ]};


    function startQuiz() {
        $('#start-b').click(function(){
            $('.startpage').addClass('hide')
            $('.question').removeClass('hide')
        });
    };
   

    function initQuiz() {
        startQuiz();
    }

    $(initQuiz);