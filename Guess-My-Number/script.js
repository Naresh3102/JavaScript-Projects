'use strict';
/*
document.querySelector('.message').textContent;

document.querySelector('.message').textContent = 'Correct Number 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

const min = Math.ceil(1);
const max = Math.floor(20);
let myNumber = Math.floor(Math.random() * (max - min) + min);
let score = 20;
let highscore = 0;

const checkEvent = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      "The number can't be empty 🚫";
  }

  // Guess is not equal to the random number
  else if (guess !== myNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < myNumber ? '📉 Too Low' : '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  // Guess is less than random number
  //   else if (guess < myNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '👎 You lose the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  // Guess is greater than random number
  //   else if (guess > myNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '👎 You lose the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  // Guess is equal to the random number
  else if (guess === myNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Correct Answer 🎉';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = myNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  }
};

const playAgain = function () {
  score = 20;
  myNumber = Math.floor(Math.random() * (max - min) + min);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const enterCheck = function (e) {
  if (e.key === 'Enter') {
    checkEvent();
  }
};

const rKey = function (e) {
  if (e.key === 'r') {
    playAgain();
  }
};

document.querySelector('.check').addEventListener('click', checkEvent);
document.querySelector('.again').addEventListener('click', playAgain);
document.addEventListener('keydown', enterCheck);
document.addEventListener('keydown', rKey);
