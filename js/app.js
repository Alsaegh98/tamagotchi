

/*-------------------------------- Constants --------------------------------*/

const state = {
    boredom : 0,
    hunger : 0,
    sleepiness : 0,
};


/*---------------------------- Variables (state) ----------------------------*/

let timer;
let gameover;


/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

const gameMessageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('restart');


//console.log(boredomStatEl, hungerStatEl, sleepinessStatEl, playBtnEl, feedBtnEl, sleepBtnEl, gameMessageEl, resetBtnEl);

/*-------------------------------- Functions --------------------------------*/
const init = () => {
    console.log('Game initialized');
    gameOver = false;
  
    timer = setInterval(runGame, 2000);
  
    render();
  };
  
  const runGame = () => {
    updateStates();
    checkGameOver();
    render();
  };
  
  const updateStates = () => {
    const increment = () => Math.floor(Math.random() * 4);
    state.boredom += increment();
    state.hunger += increment();
    state.sleepiness += increment();
  };
  
  const render = () => {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;
  
    if (gameOver) {
      clearInterval(timer);
      gameMessageEl.classList.remove('hidden');
      resetBtnEl.classList.remove('hidden');
    }
  };
  
  const checkGameOver = () => {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
      gameOver = true;
    }
  };
  
  const playBtnClick = () => {
    state.boredom = 0;
    render();
  };
  
  const feedBtnClick = () => {
    state.hunger = 0;
    render();
  };
  
  const sleepBtnClick = () => {
    state.sleepiness = 0;
    render();
  };
  
  const resetGame = () => {
    gameMessageEl.classList.add('hidden');
    resetBtnEl.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = false;
  
    timer = setInterval(runGame, 2000);
  
    render();
  };  

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);
resetBtnEl.addEventListener('click', resetGame);

init();
