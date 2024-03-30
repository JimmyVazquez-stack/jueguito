const player = document.getElementById('player');
const sombrilla = document.getElementById('sombrilla');
const buttonPlayStop = document.getElementById('buttonPlayStop');
const background = document.getElementById('background');
const board = document.getElementById('game-container');
let scoreInterval;
let score = 0;


board.addEventListener('click', function(){
    playerJump();
})

function playerJump() {
    player.classList.add('playerJump');
}

player.addEventListener('animationend', () => {
    removeJump();
});

function removeJump() {
    player.classList.remove('playerJump');
}


function pauseGame() {
    player.style.animationPlayState = 'paused';
    sombrilla.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
    stopScore();
    
}

function stopScore() {
    clearInterval(scoreInterval);
}

function resumeScore() {
    scoreInterval = setInterval(() => {
        score++;
        document.getElementById('score').innerText = score;
    }, 500);
}

function resumeGame() {
    sombrilla.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    background.style.animationPlayState = 'running';
    resumeScore();
}

buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains('play')) {
        resumeGame();
    }
    else{
        pauseGame();
    }
    buttonPlayStop.classList.toggle('play');
})

resumeScore();

const restartButton = document.getElementById('restartGame');
restartButton.addEventListener('click', restartGame) 
function restartGame() {
    alert("¿quieres reiniciar el juego?");
    resetScore();
}

function resetScore() {
    score = 0;
    document.getElementById('score').innerText = score;
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'ArrowUp') {
        playerJump();
    }
})