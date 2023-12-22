/* jshint esversion: 11 */
/** 
 * Get DOM elements and store them in variables
 */
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionCounterElement = document.getElementById('question-counter');

/** 
 * Initialize variables for the game state and timer
 */
let shuffledQuestions, currentQuestionIndex, questionCounter, interval;

/** 
 * Hide answer buttons initially
 */
answerButtonsElement.classList.add('hide');

/** 
 * Event listener for starting the game and starting the timer
 */
startButton.addEventListener('click', startGame);
startButton.addEventListener('click', myTimer);

/** 
 * Event listener for moving to the next question
 */
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

/** 
 * Function to start the game
 */
function startGame() {
    // Set initial score to 0
    document.getElementById('score').innerText = 0;
    // Hide start button and show answer buttons
    startButton.classList.add('hide');
    answerButtonsElement.classList.remove('hide');
    questionElement.classList.remove('hide')
    // Shuffle questions and set initial variables
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionCounter = 0;
    questionContainerElement.classList.remove('hide');
    // Display the first question
    setNextQuestion();
}

/** 
 * Function to end the game
 */
function endGame() {
    // Clear the timer interval
    clearInterval(interval);
    // Show completion alert and restart button
    alert("You've completed all questions!");
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    answerButtonsElement.classList.add('hide');
    nextButton.classList.add('hide');
    questionElement.classList.add('hide');
}

/** 
 * Function to update the question counter display
 */
function updateQuestionCounter() {
    questionCounterElement.innerText = questionCounter + '/31';
}

/** 
 * Timer function
 */
function myTimer() {
    let count = 30;
    // Update timer every second
    interval = setInterval(function () {
        document.getElementById('timer').innerHTML = 'Time Left ' + count;
        count--;
        // When time is up, show alert, reset UI, and show restart button
        if (count === -1) {
            clearInterval(interval);
            alert("You're out of time!");
            startButton.innerText = 'Restart';
            startButton.classList.remove('hide');
            answerButtonsElement.classList.add('hide');
            nextButton.classList.add('hide');
            questionElement.classList.add('hide')

        }

    }, 1000);
}

/** 
 * Function to set up the next question
 */
function setNextQuestion() {
    // Reset UI state
    resetState();
    // If there are more questions, display the next one
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        answerButtonsElement.classList.remove('hide');
        questionCounter++;
        updateQuestionCounter();
    } else {
        // If all questions are answered, end the game
        endGame();
    }
}

/** 
 * Function to display a question
 */
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

/** 
 * Function to reset the UI state
 */
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/** 
 * Function to handle the user's answer selection
 */
function selectAnswer(e) {
    let selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    // Apply status class to each answer button
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    // Show next button or restart button based on the number of questions
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
        answerButtonsElement.classList.add('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    // If the answer is correct, increment the score
    if (correct) {
        incrementScore();
    }
}

/** 
 * Function to set the status class (correct or wrong)
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/** 
 * Function to clear the status class
 */
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/** 
 * Function to increment the score
 */
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
    {
        question: 'How many hearts does an octopus have?',
        answers: [
            { text: '3', correct: true },
            { text: '5', wrong: false },
            { text: '1', wrong: false },
            { text: '8', wrong: false }
        ]
    },
    {
        question: 'Which river flows through the Grand Canyon?',
        answers: [
            { text: 'Neuse River', wrong: false },
            { text: 'Nile', wrong: false },
            { text: 'Mississippi River', wrong: false },
            { text: 'Colorado River', correct: true }
        ]
    },
    {
        question: 'What is the tallest type of tree?',
        answers: [
            { text: 'meranti', wrong: false },
            { text: 'birch', wrong: false },
            { text: 'Redwoods', correct: true },
            { text: 'cypress', wrong: false }
        ]
    },
    {
        question: 'Where did sushi originate?',
        answers: [
            { text: 'China', correct: true },
            { text: 'Japan', wrong: false },
            { text: 'Mongolia', wrong: false },
            { text: 'Norway', wrong: false }
        ]
    },
    {
        question: "I'll Make a Man Out of You' is a song from A Disney movie, which movie?",
        answers: [
            { text: 'The Incredibles', wrong: false },
            { text: 'Snow White', wrong: false },
            { text: 'Lilo and Stitch', wrong: false },
            { text: 'Mulan', correct: true }
        ]
    },
    {
        question: 'What country drinks the most coffee?',
        answers: [
            { text: 'Finland', correct: true },
            { text: 'England', wrong: false },
            { text: 'Italy', wrong: false },
            { text: 'Sweden', wrong: false }
        ]
    },
    {
        question: 'What is the capital of Ireland?',
        answers: [
            { text: 'Stockholm', wrong: false },
            { text: 'Dublin', correct: true },
            { text: 'Stockholm', wrong: false },
            { text: 'Stockholm', wrong: false }
        ]
    },
    {
        question: 'What phone company produced the 3310?',
        answers: [
            { text: 'Nokia', correct: true },
            { text: 'Samsung', wrong: false },
            { text: 'Sony', wrong: false },
            { text: 'Appel', wrong: false }
        ]
    },
    {
        question: 'What is the largest Spanish-speaking city in the world?',
        answers: [
            { text: 'Madrid', wrong: false },
            { text: 'Barcelona', wrong: false },
            { text: 'Mexico City', correct: true },
            { text: 'Cancun', wrong: false }
        ]
    },
    {
        question: 'Roald Amundsen was the first man to reach the South Pole, but where was he from?',
        answers: [
            { text: 'England', wrong: false },
            { text: 'America', wrong: false },
            { text: 'Germany', wrong: false },
            { text: 'Norway', correct: true }
        ]
    },
    {
        question: 'Who was the Ancient Greek God of the Sun?',
        answers: [
            { text: 'Apollo', correct: true },
            { text: 'Athena', wrong: false },
            { text: 'Hermes', wrong: false },
            { text: 'Artemis', wrong: false }
        ]
    },
    {
        question: 'What city is known as "The Eternal City"?',
        answers: [
            { text: 'Paris', wrong: false },
            { text: 'Wien', wrong: false },
            { text: 'Rome', correct: true },
            { text: 'Stockholm', wrong: false }
        ]
    },
    {
        question: 'Which planet has the most moons?',
        answers: [
            { text: 'Jupiter', wrong: false },
            { text: 'Venus', wrong: false },
            { text: 'Saturn', correct: true },
            { text: 'Mercury', wrong: false }
        ]
    },
    {
        question: 'On what continent would you find the city of Baku?',
        answers: [
            { text: 'Africa', wrong: false },
            { text: 'Asia', correct: true },
            { text: 'North America', wrong: false },
            { text: 'South America', wrong: false }
        ]
    },
    {
        question: 'Which element has the chemical symbol "H"?',
        answers: [
            { text: 'Helium', wrong: false },
            { text: 'Hydrogen', correct: true },
            { text: 'Hafnium', wrong: false },
            { text: 'Hassium', wrong: false }
        ]
    },
    {
        question: 'Who painted the famous artwork "The Persistence of Memory"?',
        answers: [
            { text: 'Vincent van Gogh', wrong: false },
            { text: 'Salvador Dalí', correct: true },
            { text: 'Pablo Picasso', wrong: false },
            { text: 'Claude Monet', wrong: false }
        ]
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            { text: 'Elephant', wrong: false },
            { text: 'Giraffe', wrong: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Hippopotamus', wrong: false }
        ]
    },
    {
        question: 'Which language is the most widely spoken in the world?',
        answers: [
            { text: 'Spanish', wrong: false },
            { text: 'Mandarin Chinese', correct: true },
            { text: 'English', wrong: false },
            { text: 'Hindi', wrong: false }
        ]
    },
    {
        question: 'What is the largest organ in the human body?',
        answers: [
            { text: 'Heart', wrong: false },
            { text: 'Liver', wrong: false },
            { text: 'Lungs', wrong: false },
            { text: 'Skin', correct: true }
        ]
    },
    {
        question: 'Who discovered penicillin?',
        answers: [
            { text: 'Alexander Fleming', correct: true },
            { text: 'Louis Pasteur', wrong: false },
            { text: 'Jonas Salk', wrong: false },
            { text: 'Edward Jenner', wrong: false }
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Diamond', correct: true },
            { text: 'Quartz', wrong: false },
            { text: 'Topaz', wrong: false },
            { text: 'Sapphire', wrong: false }
        ]
    },
    {
        question: 'Who wrote "The Great Gatsby"?',
        answers: [
            { text: 'F. Scott Fitzgerald', correct: true },
            { text: 'Ernest Hemingway', wrong: false },
            { text: 'Charles Dickens', wrong: false },
            { text: 'Mark Twain', wrong: false }
        ]
    },
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'Amazon', wrong: false },
            { text: 'Mississippi', wrong: false },
            { text: 'Nile', correct: true },
            { text: 'Yangtze', wrong: false }
        ]
    },
    {
        question: 'Which gas do plants primarily use for photosynthesis?',
        answers: [
            { text: 'Oxygen', wrong: false },
            { text: 'Carbon Dioxide', correct: true },
            { text: 'Nitrogen', wrong: false },
            { text: 'Helium', wrong: false }
        ]
    }
];
