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
        "correct": 2
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

var startButton = document.getElementById('start-btn');
var saveButton = document.getElementById("saveButton");


startButton.addEventListener('click', function () {
    startQuiz();
})

/// giving all the button choices the click event
for (let i = 0; i < choiceEls.length; i++) {
    choiceEls[i].parentElement.addEventListener('click', function () {
        selectAnswer(i);
    })
}

function startQuiz() {
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none'

    timerInterval = setInterval(function () {
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
        //Checking to see if you choice the correct choice
        if (i === quiz[currentQuestion].correct) {
            //if you pick correct
            timer += 10;
            score++;
            console.log("Correct!!")
            console.log(score)
        } else {

            //if you pick incorrect
            timer -= 10;
            console.log("Wrong!!")
            console.log(score)
        }
    }
    //moves to the next question
    currentQuestion++;
    //checking to see if there is a next question
    if (currentQuestion < quiz.length) {
        //show the next question
        showQuestion();
    } else {
        //finish the game
        endQuiz();
    }
}

function endQuiz() {

    let endPageSection = document.querySelector(".score")
    let questionSection = document.getElementById("quiz")
    let scoreElement = document.getElementById("showScore")
    let nameEl = document.getElementById("name");
    questionSection.style.display = "none"
    endPageSection.style.display = "block"
    nameEl.textContent = "Your Name is: " + nameEl
    scoreElement.textContent = "Your Final Score is: " + score

}

function saveData() {
    var username = document.querySelector("#name").value;
    console.log("Name is: " + JSON.stringify(username) + " and the final score is: ", score);

    //save it:
    //localStorage.setItem("name", username);
    //localStorage.setItem("score", score);

    //get access to the save name input tag
    //localStorage.getItem("username")
}

saveButton.addEventListener("click", saveData);