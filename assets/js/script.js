let qArr = [
  {
    question: "What does js stand for?",
    choices: ["JavaScript", "Joker School", "JavaStart", "Java"],
    answer: "JavaScript"
  },
  {
    question: "Which of these is the html image tag?",
    choices: ["<pic>", "<img>", "<jpg>", "<image>"],
    answer: "<img>"
  },
  {
    question: "Who made Bootstrap?",
    choices: ["McDonalds", "Google", "Twitter", "Valve"],
    answer: "Twitter"
  },
  {
    question: "Which of these is common example text?",
    choices: ["newspaper articles", "national anthem lyrics", "MLK's speech", "Lorem ipsum"],
    answer: "Lorem ipsum"
  },
  {
    question: "Which of these is a data type?",
    choices: ["boolean", "opinion", "conjecture", "color"],
    answer: "boolean"
  }
];

let qId = 0;

let btn1 = $('<button class="btn btn-lg btn-outline-dark btn1 qB"></button>');
let btn2 = $('<button class="btn btn-lg btn-outline-dark btn2 qB"></button>');
let btn3 = $('<button class="btn btn-lg btn-outline-dark btn3 qB"></button>');
let btn4 = $('<button class="btn btn-lg btn-outline-dark btn4 qB"></button>');
let setHS = $('<button class="btn btn-lg btn-outline-dark setHS">Quiz Over! Set your high score.</button>');

let wrong = 10

let timeStart = function () {
  timeText = 100;
  $("#time").text(timeText);

  let timeInterval = setInterval(function () {
    if (timeText >= 1) {
      timeText--;
      $("#time").text(timeText);
    } else if (timeText <= 0) {
      clearInterval(timeInterval);
      lose();
    }
  }, 1000);
}

let lose = function () {
  $(".blurb").text("You ran out of time! Try again?")
    .removeClass("blurbQSize")
  $(".sbtn").show();
  $(".btnA1").hide();
  $(".btnA2").hide();
  $(".btnA3").hide();
  $(".btnA4").hide();
}

// when quiz starts: begin clock, populate buttons, first question
let quizStart = function () {

  $(".hSAppend").append(setHS).hide()
  timeStart();

  if (qId < qArr.length) {
    $(".sbtn").hide();
    $(".blurb")
      .text(qArr[qId].question)
      .addClass("blurbQSize");

    $(".btnA1")
      .append(btn1)
      .show();
    $(".btn1")
      .text(qArr[qId].choices[0])

    $(".btnA2")
      .append(btn2)
      .show();
    $(".btn2")
      .text(qArr[qId].choices[1])

    $(".btnA3")
      .append(btn3)
      .show();
    $(".btn3")
      .text(qArr[qId].choices[2])

    $(".btnA4")
      .append(btn4)
      .show();
    $(".btn4")
      .text(qArr[qId].choices[3])
  };

  $(".qB").on("click", check);
};

let next = function () {
  $(".blurb")
    .text(qArr[qId].question)
  $(".btn1")
    .text(qArr[qId].choices[0]);
  $(".btn2")
    .text(qArr[qId].choices[1]);
  $(".btn3")
    .text(qArr[qId].choices[2]);
  $(".btn4")
    .text(qArr[qId].choices[3]);
};

let gameOver = function () {
  $(".blurb").text("Quiz Over! Set your high score.")
    .removeClass("blurbQSize")
  $(".setHS").show();
  $(".btnA1").hide();
  $(".btnA2").hide();
  $(".btnA3").hide();
  $(".btnA4").hide();
}

let check = function (answer) {
  if (qArr[qId].answer !== qArr[qId].choices[answer]) {
    timeText -= 5;
  };
  qId++;

  if (qId < qArr.length && timeText > 0) {
    next();
  } else if (timeText <= 0) {
    lose();
  } else {
    gameOver();
    $(".setHS").show();
  };
};

// click button start 
$(".sbtn").on("click", quizStart);