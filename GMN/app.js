// Select all the DOM elements

const inputEle = document.querySelector(".guess");
const checkBtnEle = document.querySelector(".check");
const messageEle = document.querySelector(".message");
const scoreEle = document.querySelector(".score");
const highScoreEle = document.querySelector(".highscore");
const numberEle = document.querySelector(".number");
const againBtnEle = document.querySelector(".again");

// Pseudocode
// 1. Generate a random number btw 1 to 20
// Math library
// Math.random() - generate a number btw 0 to 1

// console.log(Math.trunc(Math.random() * 20) + 1);

// Homework
// Generate a random number btw 20 to 50

let secretNumber = Math.trunc(Math.random() * 20) + 1;
numberEle.textContent = secretNumber;

let gameOn = true;
let score = 20;
let highscore = 0;

const setScore = () => {
  inputEle.value = "";
  inputEle.focus();

  // Setting score
  score--;
  scoreEle.textContent = score;
};
// 2. Get guess number from input after check btn is clicked
checkBtnEle.addEventListener("click", function () {
  // if (gameOn) {

  // Guard clause
  if (!gameOn) return;

  const guess = Number(inputEle.value);

  // 3. COmpare the guess number with secret number and print appropriate message
  //      3.1 If guess > score - too high
  //      3.2 If guess < score - too low
  //      3.2 If guess == score - Correct guess

  if (guess === secretNumber) {
    messageEle.textContent = "Correct guess";
    gameOn = false;
    inputEle.disabled = true;
    document.body.style.background = "green";

    // Setting highscore
    if (score > highscore) {
      highscore = score;
      highScoreEle.textContent = highscore;
    }
  } else if (guess < secretNumber) {
    messageEle.textContent = "Too low";
    setScore();
  } else {
    messageEle.textContent = "Too high";
    setScore();
  }
  // }
});

// 4. reduce score on every wrong guess
// 5. update highscore after the game completion

// Implementing Again btn
againBtnEle.addEventListener("click", function () {
  // Generating new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreEle.textContent = score;
  numberEle.textContent = secretNumber;

  messageEle.textContent = "Start guessing..";
  gameOn = true;
  inputEle.disabled = false;
  document.body.style.background = "black";
  inputEle.value = "";
});

// Handling events
// elelemt.addEventListner('event type', fn(){executes when event occurs})

// function without names - ananomouse fns
