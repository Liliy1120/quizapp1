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
const STORE = {
    questions: [
        //1
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
        //2
      {
        question: "How do you comment code in html?",
        options: [
          "<!--comment text-->", 
          'comment --> "this is a comment"', 
          "To establish information hierarachy", 
          "To establish authority"
        ],
        answer: "<!--comment text-->"
      },
        //3
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
        //4
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
        //5
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
        //6
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
        //7
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
        //8
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

// The starting screen should have a button that users can click to start the quiz.
    function startQuiz() {
        $('.start').on("click", function(){
            $('.startpage').addClass("hide")
            $('.question').removeClass("hide")
            questionNumber++;
        });
    };

//render next question 
   
    function nextQuestion() {
        $('.check').on('click', function(){
            $('.question').
        })
    }

    function initQuiz() {
        startQuiz();
    }

    $(initQuiz);