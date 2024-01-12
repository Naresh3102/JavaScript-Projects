'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores;
let currentScore;
let player;
let playing;

const init = function () {
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  player = 0;
  playing = true;

  current0.textContent = 0;
  current1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${player}`).textContent = 0;
  player = player === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollFunc = function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${player}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};

const holdFunc = function () {
  if (playing) {
    scores[player] += currentScore;
    document.getElementById(`score--${player}`).textContent = scores[player];

    if (scores[player] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
};

const hKey = function (e) {
  if (e.key === 'h') {
    holdFunc();
  }
};

const rKey = function (e) {
  if (e.key === 'r') {
    rollFunc();
  }
};

const nKey = function (e) {
  if (e.key === 'n') {
    init();
  }
};

init();
btnRoll.addEventListener('click', rollFunc);
btnHold.addEventListener('click', holdFunc);
btnNew.addEventListener('click', init);
document.addEventListener('keydown', hKey);
document.addEventListener('keydown', rKey);
document.addEventListener('keydown', nKey);
