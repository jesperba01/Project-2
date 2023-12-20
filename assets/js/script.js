const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

answerButtonsElement.classList.add('hide');

startButton.addEventListener('click', startGame);
startButton.addEventListener('click', myTimer);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    document.getElementById('score').innerText = 0;
    startButton.classList.add('hide');
    answerButtonsElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function myTimer() {
    var count = 25;
    var interval = setInterval(function () {
        document.getElementById('timer').innerHTML = 'Time Left ' + count;
        count--;
        if (count === -1) {
            clearInterval(interval);
            alert("You're out of time!");
            startButton.innerText = 'Restart';
            startButton.classList.remove('hide');
            answerButtonsElement.classList.add('hide');
            nextButton.classList.add('hide');
        }
    }, 1000);
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    if (correct) {
        incrementScore();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', wrong: false }
        ]
    },
    {
        question: 'Whats the capital of Sweden',
        answers: [
            { text: 'Malmö', wrong: false },
            { text: 'Göteborg', wrong: false },
            { text: 'Dublin', wrong: false },
            { text: 'Stockholm', correct: true }
        ]
    },
    {
        question: 'What country has the highest life expectancy?',
        answers: [
            { text: 'Sweden', wrong: false },
            { text: 'Hong Kong', correct: true },
            { text: 'America', wrong: false },
            { text: 'Germany', wrong: false }
        ]
    },
    {
        question: 'Queen guitarist Brian May is also an expert in what scientific field?',
        answers: [
            { text: 'Experimental physics', wrong: false },
            { text: 'Astrophysics', correct: true },
            { text: 'Chemistry', wrong: false },
            { text: 'Theoretical physics', wrong: false }
        ]
    },
    {
        question: 'What Netflix show had the most streaming views in 2021?',
        answers: [
            { text: 'Squid Game', correct: true },
            { text: 'WandaVision', wrong: false },
            { text: 'Arcane', wrong: false },
            { text: 'Sweet Tooth', wrong: false }
        ]
    },
    {
        catagory: 'sports',
        question: 'What country has won the most World Cups? ',
        answers: [
            { text: 'England', wrong: false },
            { text: 'Sweden', wrong: false },
            { text: 'France', wrong: false },
            { text: 'Brazil', correct: true }
        ]
    },
    {
        question: 'What is a group of crows called?',
        answers: [
            { text: 'Crowboys', wrong: false },
            { text: 'plural crows', wrong: false },
            { text: 'A murder', correct: true },
            { text: 'A group of crows', wrong: false }
        ]
    },
    {
        question: 'Who was the world’s highest-paid athlete in 2021?',
        answers: [
            { text: 'Christian Ronaldo', wrong: false },
            { text: 'Conor McGregor', correct: true },
            { text: 'Floyd Mayweather', wrong: false },
            { text: 'Tiger Woods', wrong: false }
        ]
    },
];
