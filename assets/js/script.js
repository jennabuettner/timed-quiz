var timeLeft = 30;
var questionsArray = [];
var gameOver = false;
var correctAnswer = [];
var questionIndex = 0;
var modal = document.querySelector('.modal')
var startBtn = document.querySelector('.start-btn')
var questionText = document.querySelector('.question-text')
var paBtns = document.querySelectorAll('.pa-btn')
var rightWrong = document.querySelector('.right-wrong')
var timerEl = document.querySelector('#timer')
var submitScoreBtn = document.querySelector('.submit-score')
var finalScore = document.querySelector('.final-score')
var restartBtn = document.querySelector('.restart-btn')


console.log(paBtns)

var questions = [

    {
        question: 'What does HTML stand for?',
        possibleAnswers: ['Honeys Teach Me Lovin', 'Hyper Toddlers Might Levitate', 'Help Todd Make Licorice', 'Hypertext Markup Language'],
        correctAnswer: 'Hypertext Markup Language'
    },

    {
        question: 'What does NaN stand for?',
        possibleAnswers: ['Never ask Nonna', 'Not a number', 'Naan and Noodle', 'Nancy answered No'],
        correctAnswer: 'Not a Number'
    },

    {
        question: 'What does CSS stand for?',
        possibleAnswers: ['Come See, Stan', 'Carbonara Sauce, Sweet', 'Cascading Style Sheets', 'Crazy Silly Sloth'],
        correctAnswer: 'Cascading Style Sheets'
    },

    {
        question: 'What does PHP stand for?',
        possibleAnswers: ['Phone her Papa', 'Hypertext Preprocessor', 'Practice Healthy Podsnappery', 'Probably has Possums'],
        correctAnswer: 'Hypertext Preprocessor'
    },

    {
        question: 'What does OMGTIH stand for?',
        possibleAnswers:["Oh my god, Timmy isn't here", "Oh my geebus, that is heavy", "Oh my god, this is hard", "Oh my goodness, tomorrow is Hanukkah"],
        correctAnswer: 'Oh my god, this is hard'
    },
]


function runQuiz() {
    modal.className = 'hide'

    console.log("The quiz has started.")
        timerInterval = setInterval(function() {
        timeLeft --;
        timerEl.textContent = timeLeft + " seconds";
        console.log(timeLeft)
        if(timeLeft === 0){
            clearInterval(timerInterval);
      }  },1000);

    checkGameOver()

    populateNextQuestion()

    }

    startBtn.addEventListener('click', runQuiz);

    document.querySelector('.ans-btn-container').addEventListener('click', checkAnswer);

function checkGameOver() {
    if (questionIndex >= questions.length || timeLeft <= 0) {
        gameOver = true;
        clearInterval(timerInterval);
    }
}

function rightWrongText(text) {
    rightWrong.textContent = text

    setTimeout(() => {
        rightWrong.textContent = ''
    }, 1000);
} 

function populateNextQuestion() {
    checkGameOver()

    if (!gameOver) {
        questionText.textContent = questions[questionIndex].question
        paBtns.forEach(function(btn,i) {
        btn.textContent = questions[questionIndex].possibleAnswers[i]
        btn.dataset.answer = questions[questionIndex].possibleAnswers[i]
    })
    } else {
        endGame()
        var userInput = prompt('You scored ' + finalScore + '. Enter your initials to log your score! :)' )
        console.log(userInput + ' - ' + finalScore)
        let okHighscores = confirm('Thanks. Click "OK" to see how your score compared to others!')
        
    if (okHighscores) {
        window.location = 'endgame.html'
    }
    

    function endGame() {
        let finalScoreEl = ''
        finalScore = timeLeft;
        finalScoreEl.textContent = finalScore;
        console.log(finalScore);
        }
    }
    }
    
    // function populateHighScores() {
    //     let highScoresList = JSON.parse(localStorage.getItem('highscores')) || [];
    // this is extremely frustrating

function checkAnswer(event) {
    var element = event.target
    if (element.className === 'pa-btn') {
        console.log(element.dataset.answer)
    if (element.dataset.answer === questions[questionIndex].correctAnswer){
        rightWrongText('right')
    } else {
        rightWrongText('you suck')
        timeLeft -=5;
    }

    questionIndex++;
    return populateNextQuestion()
    }

    }