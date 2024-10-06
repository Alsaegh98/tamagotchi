/*-------------------------------- Constants --------------------------------*/

const state = {
    boredom : 0,
    hunger : 0,
    sleepiness : 0,
};

/*---------------------------- Variables (state) ----------------------------*/


let timer;
let gameover;
let counter = 0;
/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.querySelector('#boredom-stat');
 const hungerStatEl = document.querySelector('#hunger-stat');
 const sleepinessStatEl = document.querySelector('#sleepiness-stat');

 const playBtnEl = document.querySelector('#start-button');
 const gameMessageEl = document.querySelector('#status-button');
 const resetBtnEl = document.querySelector('#reset-button');

/*-------------------------------- Functions --------------------------------*/
function init(){
    resetBtnEl.classList.add('hidden');
    gameMessageEl.classList.add('hidden');

    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;

gameover = false;

console.log('game is starting');
timer = setInterval(rungame,2000);
}

function rungame(){
    
    render();

    checkGameOver();

    updateStates();
}

function render(){

    boredomStatEl.textContent = state.boredom.toFixed();
    hungerStatEl.textContent = state.hunger.toFixed();
    sleepinessStatEl.textContent = state.sleepiness.toFixed();

    if (gameover){
        clearInterval(timer);

        gameMessageEl.textContent = 'Game Over';

        resetBtnEl.classList.remove('hidden');
        gameMessageEl.classList.remove('hidden');
    }
}

function updateStates(){

    counter++;

for(let prop in state){

    state[prop] += counter %4;
}
if (counter == 3){

    counter = 0;
}

}

function checkGameOver(){

    for (let prop in state){
        if (state[prop] >= 10){
            gameover = true;
            return;
        }
    }
}

function playBtnclick(){
    state.boredom = 0;
    render();
}

window.onload =init;
/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnclick);
hungerStatEl.addEventListener('click', playBtnclick);
sleepinessStatEl.addEventListener('click', playBtnclick);
resetBtnEl.addEventListener('click', init);
