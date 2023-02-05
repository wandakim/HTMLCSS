'use strict'

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined; //*
let gameTime = 5;//
let min = parseInt(gameTime/60);
let sec = parseInt(gameTime%60);

gameBtn.addEventListener('click', ()=> {
    if(started){
        stopGame();
    } else {
        startGame();
    }
    started = !started;
})

function startGame() { // 타이머 등장 순간부터 제한시간이 있으려면? 
    initGame();
    startGameTimer();
    showStopButton();
    showTimerAndScore();
}

function startGameTimer() {
    const timer = setInterval(() => {
        gameTimer.innerHTML = `${min}:${sec}`;
        --gameTime
        if(gameTime<0){
            clearInterval(timer);
        }
    },1000)
}

function showStopButton() {
    const icon = document.querySelector('.fa-play');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function stopGame() {}

function initGame() {
    field.innerHTML = '';
    gameScore.innerHTML = CARROT_COUNT;
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}

function addItem(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++){
        const item = document.createElement('img');
        item.setAttribute('class',className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
    }

