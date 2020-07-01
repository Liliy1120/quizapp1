const STORE = [
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
      `comment --> "this is a comment"`, 
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
  ];

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
let score = 0;

// The starting screen should have a button that users can click to start the quiz.
function startQuiz(questionNumber) {
    $('.start').on("click", function(){
         $('.js-startpage').addClass("hide")
        $('.question').removeClass("hide")
        $('.question').css('display', 'block')
        questionNumber = 1;
        $('.qnum').text(questionNumber);
        console.log('startQuiz ran')
        renderQuestion(questionNumber -1)
    });
}

//hide initial question
function hideQuestion() {
    $('.rightWrong').on('click','button', function() {
        $('.initQues').addClass('hide');
        $('.rightWrong').addClass('hide');
        console.log('hideQuestion ran');
        console.log(questionNumber);
    });
}

//make form template for next questions 
function createForm(questionIndex) {
console.log('createForm ran');
//checkAnswer(questionIndex);
if(questionIndex < STORE.length) {
    return`<form action="" method="post" id:'qForm'>
    <fieldset>
        <legend>${STORE[questionIndex].question}</legend>
        <label for="1">
        <input class="radio container" type="radio" id="1" value="${STORE[questionIndex].options[0]}" name="answer" required>
        <span class="checkmark">${STORE[questionIndex].options[0]}</span>
        </label>
        <label for="2">
        <input class="radio container" type="radio" id="2" value="${STORE[questionIndex].options[0]}" name="answer" required>
        <span class="checkmark">${STORE[questionIndex].options[1]}</span>
        </label>
        <label for="3">
        <input class="radio container" type="radio" id="3" value="${STORE[questionIndex].options[0]}" name="answer" required>
        <span class="checkmark">${STORE[questionIndex].options[2]}</span>
        </label>
        <label for="3">
        <input class="radio containe" type="radio" id="4" value="${STORE[questionIndex].options[0]}" name="answer" required>
        <span class="checkmark">${STORE[questionIndex].options[3]}</span>
        </label>
        <button type="submit" class="checkme"> Check Answer</button >
    </form>`;
    
    };
    // checkAnswer();

}


//and render next questions
function renderQuestion() {
    if (questionNumber < STORE.length) {
        console.log('renderQuestion ran')
     $('.question').html(createForm(questionNumber));
    } else {
      $('.question').hide()
      finalScore()
      $('.qnum').text(10)
    }
    checkAnswer();
  }


// show question number
function scoreBoard() {
    $(".start").on("click", function() {
        $(".score").removeClass("hide");
    })
    console.log('scoreBoard ran');
}

//update question number
function updateQuestionNumber() {
    questionNumber++;
    $('.qnum').text(questionNumber++);
    console.log('updateQuestionNumber ran');
}

//check the submitted answer 
function checkAnswer() {
$('form').submit(function(event){   
    event.preventDefault()
    console.log('checkAnswer ran');

    let selectedAnswer = $('input:checked');
    console.log(selectedAnswer);
    let selectAns = selectedAnswer.val();
    console.log("--"+selectAns+"--");
    let correctAnsw = STORE[questionNumber].answer;
    console.log("--"+correctAnsw+"--");
    
    if (selectAns.trim() === correctAnsw) {
        correctAns();
        updateScore()
        console.log('correct ran');
    } else {
        wrongAns();
        updateScore()
        console.log('wrongAns ran');
    }
    
  });
}

function correctAns(){
$('.correct').removeClass('hide');
$('.correct').html(`You got it right :)<br> You have been studying! <button>Next Question</button>`);
$('.check').addClass('hide');
console.log(questionNumber);
}
//update score points
function updateScore() {
score++;
$('.score').text(score);
$('.board').removeClass('hide');
console.log('updateScore ran')
}

function wrongAns(){
$('.wrong').removeClass('hide');
$('.wrong').html(`Aww, you made a mistake The correct answer is:  ${STORE[questionNumber].answer}<button>Next Question</button>`);
$('.check').addClass('hide');
console.log(questionNumber);
}

function finalScore() {
    console.log('hi')
};



// render next question 
// I want the index number to connect to the question number 
// so whatever question number is displayed i want it to match the index number


function nextQuestion() {
$('.rightWrong').on('click',function(event){
  event.preventDefault();
  updateQuestionNumber();
  //updateScore();


  console.log(score);
  console.log('nextQuestion ran');
 });
}

function initQuiz() {
    startQuiz();
    scoreBoard();
    checkAnswer();
    hideQuestion();
    renderQuestion();
    nextQuestion();
    console.log(questionNumber);
}

$(initQuiz);
   