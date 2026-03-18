const quiz = [
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language",
    ],
    correct: 0,
  },

  {
    question: "CSS is used for?",
    options: ["Styling", "Database", "Logic", "Server"],
    correct: 0,
  },

  {
    question: "JavaScript is?",
    options: ["Programming Language", "Styling Tool", "Database", "Browser"],
    correct: 0,
  },

  {
    question: "Which tag is used for images?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correct: 0,
  },

  {
    question: "Which CSS property controls text size?",
    options: ["font-size", "text-style", "text-size", "font-style"],
    correct: 0,
  },

  {
    question: "Which HTML tag creates a link?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0,
  },

  {
    question: "Which keyword declares variable?",
    options: ["let", "varr", "int", "string"],
    correct: 0,
  },

  {
    question: "Which is a JS framework?",
    options: ["React", "Laravel", "Django", "Spring"],
    correct: 0,
  },

  {
    question: "Which CSS layout is modern?",
    options: ["Flexbox", "Float", "Table", "Inline"],
    correct: 0,
  },

  {
    question: "Which is used for responsiveness?",
    options: ["Media Queries", "Loops", "Functions", "Arrays"],
    correct: 0,
  },
];

let current = 0;
let score = 0;

const container = document.querySelector(".quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll("input");
const optionText = [
  document.getElementById("opt0"),
  document.getElementById("opt1"),
  document.getElementById("opt2"),
  document.getElementById("opt3"),
];

const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  container.classList.remove("show");

  setTimeout(() => {
    let q = quiz[current];

    questionEl.innerText = q.question;

    optionText.forEach((el, i) => {
      el.innerText = q.options[i];
    });

    optionsEl.forEach((el) => (el.checked = false));
    container.classList.add("show");
  }, 200);
}

loadQuestion();

nextBtn.addEventListener("click", () => {
  let selected = document.querySelector("input[name='answer']:checked");

  if (!selected) {
    alert("Please select an answer");
    return;
  }

  if (parseInt(selected.value) === quiz[current].correct) {
    score++;
  }

  current++;

  if (current < quiz.length) {
    loadQuestion();
  } else {
    container.innerHTML = `<h2>Your Score: ${score}/${quiz.length}</h2>
        <button onclick="location.reload()">Restart</button>
    `;
  }
});
