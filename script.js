const questions = [
    {
        question: "1. What is phishing?",
        options: [
            "A type of cyber attack",
            "A computer game",
            "A programming language",
            "A web browser"
        ],
        answer: 0
    },
    {
        question: "2. What should you do with a suspicious email link?",
        options: [
            "Click immediately",
            "Share with friends",
            "Avoid clicking it",
            "Enter your password"
        ],
        answer: 2
    },
    {
        question: "3. What is a strong password?",
        options: [
            "123456",
            "password",
            "Your name",
            "A mix of letters, numbers and symbols"
        ],
        answer: 3
    },
    {
        question: "4. What does OTP mean?",
        options: [
            "One Time Password",
            "Online Transfer Process",
            "Open Text Program",
            "One Type Protection"
        ],
        answer: 0
    },
    {
        question: "5. What should you do if you suspect phishing?",
        options: [
            "Ignore all warnings",
            "Report the message",
            "Share your details",
            "Click the link"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const quizSection = document.getElementById("quiz");

function showQuestion() {
    const q = questions[currentQuestion];

    quizSection.innerHTML = `
        <h2>Phishing Awareness Quiz</h2>
        <h3>${q.question}</h3>

        <div id="options">
            ${q.options.map((option, index) => `
                <button onclick="checkAnswer(${index})">
                    ${option}
                </button>
            `).join("")}
        </div>

        <p id="result"></p>
        <p>Question ${currentQuestion + 1} of ${questions.length}</p>
    `;
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    const result = document.getElementById("result");

    if (selected === correct) {
        score++;
        result.textContent = "Correct answer!";
    } else {
        result.textContent = "Wrong answer! Try to learn more.";
    }

    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(button => button.disabled = true);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    nextButton.onclick = nextQuestion;

    quizSection.appendChild(nextButton);
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizSection.innerHTML = `
            <h2>Quiz Completed!</h2>
            <h3>Your Score: ${score} / ${questions.length}</h3>
            <button onclick="restartQuiz()">Try Again</button>
        `;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

showQuestion();