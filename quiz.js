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
    question: "Why is the <html> element called the root element?",
    options: [
      "because it is the parent (or grandparent, or great-parent, etc.) of all other elements in the documents",
      "because i am groot", 
      "c", 
      "d", 
      "e"
    ],
    answer: "because it is the parent (or grandparent, or great-parent, etc.) of all other elements in the documents"
  },
    //3
  {
    question: "What do psuedo-classes do?",
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
    question: "What is an example of a psuedo-element?",
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
    question: "What is a README file?",
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
    question: "What command should be used to look at a prior state of your repository?",
    options: [
      "It tells where the head of a document is", 
      "For styling purposes", 
      "To establish information hierarachy", 
      "To establish authority"
    ],
    answer: "git checkout"
  },
    //7
  {
    question: "What which value is true in JavaScript?",
    options: [
      "It tells where the head of a document is", 
      "For styling purposes", 
      "To establish information hierarachy", 
      "To establish authority"
    ],
    answer: "Boolean(-1)"
  },
    //8
  {
    question: "What does 'stict mode' do?",
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
         $('.js-startpage').hide();
        $('.question').removeClass("hide")
        $('.board').removeClass("hide")
        questionNumber = 1;
        $('.qnum').text(questionNumber);
        console.log('startQuiz ran')
        renderQuestion(questionNumber -1)
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
        <input class="radio container" type="radio" id="2" value="${STORE[questionIndex].options[1]}" name="answer" required>
        <span class="checkmark">${STORE[questionIndex].options[1]}</span>
        </label>
        <label for="3">
        <input class="radio container" type="radio" id="3" value="${STORE[questionIndex].options[2]}" name="answer" required>
        <span class="checkmark">${STORE[questionIndex].options[2]}</span>
        </label>
        <label for="3">
        <input class="radio containe" type="radio" id="4" value="${STORE[questionIndex].options[3]}" name="answer" required>
        <span class="checkmark">${STORE[questionIndex].options[3]}</span>
        </label>
        <button type="submit" class="checkme"> Check Answer</button >
    </form>`;
    
    };

}


//and render next questions
function renderQuestion() {
    if (questionNumber < STORE.length) {
        console.log('renderQuestion ran')
     $('.question').html(createForm(questionNumber));
    } else {
      $('.question').hide()
      $('.board').hide()
      $('.rightWrong').hide()
      finalScore();
    }
    checkAnswer();
    console.log('renderQuestion ran')
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
    questionNumber++
    $('.qnum').text(questionNumber+1);
    console.log('updateQuestionNumber ran');
}

//check the submitted answer 
function checkAnswer() {
$('form').submit(function(event){   
    event.preventDefault()
    let selectedAnswer = $("input:checked").val();
    let correctAnsw = `${STORE[questionNumber].answer}`;
    
    if (selectedAnswer === correctAnsw) {
        correctAns();
        updateScore()
        console.log('correct ran');
    } else {
        wrongAns();
        console.log('wrongAns ran');
    }
    
  });
}

//render correct answer and feed back
function correctAns(){
$('.correct').removeClass('hide')
$('.correct').html(`You got it right :)<br> You have been studying! <button class='nextQ'>Next Question</button>`);
$('.checkme').addClass('hide');

console.log(questionNumber);
}
//update score points
function updateScore() {
score++;
$('.score').text(score);
$('.board').removeClass('hide');
console.log('updateScore ran')
}


//render wrong answer and feed back
function wrongAns(){
$('.wrong').removeClass('hide');
$('.wrong').html(`Aww, you made a mistake The correct answer is:  ${STORE[questionNumber].answer}<button class='nextQ'>Next Question</button>`);
$('.checkme').addClass('hide');
console.log(questionNumber);
}

//final Score
function finalScore() {
    let score = $('score').val;
    console.log(score);
    if (score >= 4){
        lowScore();
    } else if (score === 5||6) {
        mediumScore();
    } else {
        highScore();
    }
};

function lowScore() {
    $('.poor').removeClass('hide')
    $('.finalScorePage').html(score)
    startOver()
}

function mediumScore() {
    $('.okay').removeClass('hide')
    $('.finalScorePage').html(score)
    startOver()
}

function highScore() {
    $('.great').removeClass('hide')
    $('.finalScorePage').html(score)
    startOver()
}

function startOver() {
    // $('.startOver').click(function(){
    //     console.log('startOver ran')
    //     event.preventDefault();
    //     resetBoard();
    //     $('.js-startpage').show();
    //     $('.finalScore').addClass('hide');
    // });
    $('.startOver').click(function () {
        location.reload(true); 
    });
}

// function resetBoard(){
//     score = 0;
//     questionNumber = 0;
//     $('.score').text(0);
//     $('.questionNumber').text(0);
// }

// render next question 
// I want the index number to connect to the question number 
// so whatever question number is displayed i want it to match the index number


function nextQuestion() {
$('.rightWrong').on('click','.nextQ',function(event){
    $('.rightWrong').hide();
    console.log('nextQuestion ran')
  updateQuestionNumber();
  renderQuestion();
  

  console.log(score);
  console.log('nextQuestion ran');
 });
}


function initQuiz() {
    startQuiz();
    scoreBoard();
    checkAnswer();
    renderQuestion();
    nextQuestion();
    startOver()
    console.log(questionNumber);
}

$(initQuiz);
   