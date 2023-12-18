const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
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

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'Whats the capital of Sweden',
        answers: [
            { text: 'Malmö', correct: false },
            { text: 'Göteborg', correct: false },
            { text: 'Dublin', correct: false },
            { text: 'Stockholm', correct: true }
        ]
    },
    {
        question: 'What country has the highest life expectancy?',
        answers: [
            { text: 'Sweden', correct: false },
            { text: 'Hong Kong', correct: true },
            { text: 'America', correct: false },
            { text: 'Germany', correct: false }
        ]
    },
    {
        question: 'Queen guitarist Brian May is also an expert in what scientific field?',
        answers: [
            { text: 'Experimental physics', correct: false },
            { text: 'Astrophysics', correct: true },
            { text: 'Chemistry', correct: false },
            { text: 'Theoretical physics', correct: false }
        ]
    },
    {
        question: 'What Netflix show had the most streaming views in 2021?',
        answers: [
            { text: 'Squid Game', correct: true },
            { text: 'WandaVision', correct: false },
            { text: 'Arcane', correct: false },
            { text: 'Sweet Tooth', correct: false }
        ]
    },
    {
        question: 'What country has won the most World Cups? ',
        answers: [
            { text: 'England', correct: false },
            { text: 'Sweden', correct: false },
            { text: 'France', correct: false },
            { text: 'Brazil', correct: true }
        ]
    },
    {
        question: 'What is a group of crows called?',
        answers: [
            { text: 'Crowboys', correct: false },
            { text: 'plural crows', correct: false },
            { text: 'A murder', correct: true },
            { text: 'A group of crows', correct: false }
        ]
    },
    {
        question: 'Who is the world’s highest-paid athlete in 2021?',
        answers: [
            { text: 'Christian Ronaldo', correct: false },
            { text: 'Conor McGregor', correct: true },
            { text: 'Floyd Mayweather', correct: false },
            { text: 'Tiger Woods', correct: false }
        ]
    }
];
