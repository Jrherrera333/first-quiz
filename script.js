const quiz = [
    {
        "question": "What is 2+2?",
        "choices": ["1", "2", "3", "4"],
        "correct": 3
    },
    {
        "question": "What is the capital of France?",
        "choices": ["Paris", "London", "Madrid", "Rome"],
        "correct": 0
    },
    {
        "question": "What is the capital of Dominican Republic?",
        "choices": ["Cotui", "Santo Domingo", "Santiago", "La Romana"],
        "correct": 1
    },
    {
        "question": "What is the capital of USA?",
        "choices": ["Pennsylvania", "North Carolina", "Washington DC", "Boston"],
        "correct": 0
    }
];

let currentQuestion = 0;
let score = 0;
let timer = 90;
let timerInterval;

const questionEl = document.getElementById('question');
const choiceEls = [
    document.getElementById('choice0'),
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3')
]

document.getElementById('start-btn').addEventListener('click', startQuiz);

for (let i = 0;i < choiceEls.length; i++) {
    choiceEls[i].parentElement.addEventListener('click', function(){
        selectAnswer(i);
    })
}

function startQuiz() {
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';

    timerInterval = setInterval(function(){
        timer--;
        document.getElementById('time').innerText = timer;

        if (timer <= 0) {
            endQuiz();
        }
    }, 1000);

    showQuestion();
}

function showQuestion() {
    questionEl.innerText = quiz[currentQuestion].question;
    for (let i = 0; i < choiceEls.length; i++) {
        choiceEls[i].innerText = quiz[currentQuestion].choices[i];
    }
}

function selectAnswer(i) {
    if (quiz[currentQuestion]) {
        if (i === quiz[currentQuestion].correct ) {
        timer+=10; score++;
        } else {
            timer -= 10;
        }
    } 

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    alert('Quiz ended! Your score: ' + score);
} 