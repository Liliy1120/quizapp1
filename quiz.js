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
          "because I am groot",
          "because the code is written in an index.html file",
          "because it tells the file which language the file is written in"
      ],
      answer: "because it is the parent (or grandparent, or great-parent, etc.) of all other elements in the documents"
  },
  //3
  {
      question: "What do psuedo-classes do?",
      options: [
          "They target specific states of the document such as user hovering over or clicking on an element",
          "A notation resembling a simplified programming language, used in program design.",
          "Is a keyword added to a selector that lets you style a specific part of the selected element(s).",
          "Element with the symbol P and atomic number 15"
      ],
      answer: "They target specific states of the document such as user hovering over or clicking on an element"
  },
  //4
  {
      question: "What is an example of a psuedo-element?",
      options: [
          "This elemental system involves four primary elements: water, earth, fire, and air. Only the avatar can master all four elements, whereas regular individuals may be able to master one or none of the bending arts",
          "a:hover",
          "p::first-letter",
          "is a used to style specified parts of an element"
      ],
      answer: "p::first-letter"
  },
  //5
  {
      question: "What is a README file?",
      options: [
          "A README is a text file that introduces and explains a project. It contains information that is commonly required to understand what the project is about",
          "It reads the whole code in simple language and a summary about the programmer and their qualifications",
          "It is hundreds of wonderful short stories for programmers",
          "It is actually a beginners guide to the universe of files"
      ],
      answer: "A README is a text file that introduces and explains a project. It contains information that is commonly required to understand what the project is about"
  },
  //6
  {
      question: "What command should be used to look at a prior state of your repository?",
      options: [
          "git undo",
          "git Great Scott!",
          "git ctrl Z",
          "git checkout"
      ],
      answer: "git checkout"
  },
  //7
  {
      question: "Which value is true in JavaScript?",
      options: [
          "Boolean(false)",
          "Boolean(null)",
          "Boolean('false')",
          "Boolean(0)"
      ],
      answer: "Boolean('false')"
  },
  //8
  {
      question: "What does 'strict mode' do?",
      options: [
          "It makes it so when anytime a variable is declared without the let or const keyword, an error pops up making it easier to avoid global variables ",
          "Actually... it doesnt even go here",
          "It makes it so you have to comment your code",
          "It deletes all global variables"
      ],
      answer: "It makes it so when anytime a variable is declared without the let or const keyword, an error pops up making it easier to avoid global variables "
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
  $('.start').on("click", function() {
      $('.js-startpage').hide();
      $('.question').show() /*removeClass("hide")*/
      $('.board').show() /*removeClass("hide")*/
      $('.qnum').text(1);
      console.log('startQuiz ran')
      renderQuestion(questionNumber /*-1*/ );
  });
}


//make form template for next questions 
function createForm(questionIndex) {
  console.log('createForm ran');
  //checkAnswer(questionIndex);
  if (questionIndex < STORE.length) {
      return `
        <form id ='qForm'>
        <fieldset>
            <legend class='formQ'>${STORE[questionIndex].question}</legend>
            <label for="1">
            <input class="radio container radiobtn" type="radio" id="1" value="${STORE[questionIndex].options[0]}" name="answer" required>
            <span class="checkmark">${STORE[questionIndex].options[0]}</span>
            </label>
            <label for="2">
            <input class="radio container radiobtn" type="radio" id="2" value="${STORE[questionIndex].options[1]}" name="answer" required>
            <span class="checkmark">${STORE[questionIndex].options[1]}</span>
            </label>
            <label for="3">
            <input class="radio container radiobtn" type="radio" id="3" value="${STORE[questionIndex].options[2]}" name="answer" required>
            <span class="checkmark">${STORE[questionIndex].options[2]}</span>
            </label>
            <label for="4">
            <input class="radio container radiobtn" type="radio" id="4" value="${STORE[questionIndex].options[3]}" name="answer" required>
            <span class="checkmark">${STORE[questionIndex].options[3]}</span>
            </label>
            <button type="submit" class="checkme"> Check Answer</button >
        </form>`;
  };

}


// render next questions
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
  $('.qnum').text(questionNumber + 1);
  console.log('updateQuestionNumber ran');
}

//check the submitted answer 
function checkAnswer() {
  $('form').submit(function(event) {
      event.preventDefault()
      $('.finalscore').hide();
      $('.rightWrong').show();

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

  })
}


//render correct answer and feed back
function correctAns() {
  $('.rightWrong').show()
  $('.rightWrong p').html(correctContent());
  $('.checkme').addClass('hide');
  $('.question').hide();
  console.log(questionNumber);
}

//if answered correctly
function correctContent() {
  let html = `You got it right :)<br> You have been studying! <br><img src="images/correct.jpg">`
  return html
}

//update score points
function updateScore() {
  score++;
  $('.score').text(score);
  $('.board').removeClass('hide');
  console.log('updateScore ran')
}


//render wrong answer and feed back
function wrongAns() {
  $('.rightWrong').show()
  $('.rightWrong p').html(wrongContent())
  $('.checkme').addClass('hide');
  $('.question').hide();
  console.log(questionNumber);
}

//if answered incorrectly
function wrongContent() {
  let html = `Aww, you made a mistake The correct answer is:  ${STORE[questionNumber].answer} <br> <img src="images/wrong.png">`
  return html
}

// renders final score
function finalScore() { 
  $('.finalscore').show();
  $('.endscore').show();
  $('.startOver').show();
  $('.final').text(score)

    if (score < 6) {
        $('.feedback').prepend(poorScore());
    } else if (score === 6) {
      $('.feedback').prepend(okScore());
    } else {
      $('.feedback').prepend(awesomeScore());
    };
};

function awesomeScore() {
  let awesome = `<p>Wow you have been studying! Wanna try again just for funnzies?</p>`;
  return awesome;
};

function okScore() {
  let ok = `<p>You did pretty well! Lets see if you can get all of them correct this time</p>`;
  return ok;
};

function poorScore() {
  let poor = `<p>Lets study some more and try again</p>`;
  return poor;
};


//starts quiz over

function startOver() {
  $(document).on('click', '.startOver', function() {
      // location.reload(true);
      console.log('startOver ran')
      score = 0;
      questionNumber = 0;
      $('.score').text(score);
      $('.qnum').text(1);
      $('.js-startpage').show();
      $(".feedback").empty();
      $('.finalScore').hide();
      $('.endscore').hide();
      $('.startOver').hide();
      startQuiz(0);
  });
}

// render next question 
// I want the index number to connect to the question number 
// so whatever question number is displayed i want it to match the index number


function nextQuestion() {
  $('.nextQ').on('click', function(event) {
      $('.rightWrong').hide();
      // $('.wrong').hide();
      // $(".wrongp").empty();
      $('.question').show();
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
  startOver();
  console.log(questionNumber);
}

$(initQuiz);
   