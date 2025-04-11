const ball = document.createElement('div')
const Lpaddle = document.createElement('div')
const Rpaddle = document.createElement('div')
const scoreboard = document.createElement('div')
document.body.appendChild(scoreboard)
document.body.appendChild(Lpaddle)
document.body.appendChild(Rpaddle)
let LpaddleWidth = 20
let LpaddleHeight = 150
const ballRadius = 25
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let gameInterval = null;
let LpaddleYPosition = windowHeight / 2 - LpaddleHeight / 2
let LpaddleYDirection = 15
let LpaddleMovingUp = false;
let LpaddleMovingDown = false;
let LpaddleCanShoot = true;
let RpaddleCanShoot = true;

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        if (LpaddleCanShoot) {
            shootLaser('left');
            resetPaddles();
            LpaddleCanShoot = false;
            setTimeout(() => LpaddleCanShoot = true,);
        }
    }
    if (event.key === 'Enter') {
        if (RpaddleCanShoot) {
            shootLaser('right');
            RpaddleCanShoot = false;
            setTimeout(() => RpaddleCanShoot = true, );
        }
    }
});

function shootLaser(paddle) {
    const laser = document.createElement('div');
    laser.style.position = 'absolute';
    laser.style.width = '10px';
    laser.style.height = '5px';
    laser.style.backgroundColor = 'yellow';

    if (paddle === 'left') {
        laser.style.left = `${50 + LpaddleWidth}px`;
        laser.style.top = `${LpaddleYPosition + LpaddleHeight / 2}px`;
        document.body.appendChild(laser);
        moveLaser(laser, 'right');
    } else if (paddle === 'right') {
        laser.style.right = `${50 + RpaddleWidth}px`;
        laser.style.top = `${RpaddleYPosition + RpaddleHeight / 2}px`;
        document.body.appendChild(laser);
        moveLaser(laser, 'left');
    }
}


const instruction = document.createElement('div');
instruction.textContent = "Press 'Enter' for Right Paddle or 'Space' for Left Paddle to Shoot!";
instruction.style.position = 'absolute';
instruction.style.top = '10%';
instruction.style.left = '50%';
instruction.style.transform = 'translateX(-50%)';
instruction.style.color = 'white';
instruction.style.fontSize = '20px';
instruction.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(instruction);

function moveLaser(laser, direction) {
    const interval = setInterval(() => {
        const laserRect = laser.getBoundingClientRect();
        const LpaddleRect = Lpaddle.getBoundingClientRect();
        const RpaddleRect = Rpaddle.getBoundingClientRect();

        if (direction === 'right') {
            laser.style.left = `${laser.offsetLeft + 10}px`;
            if (laserRect.right >= RpaddleRect.left &&
                laserRect.top <= RpaddleRect.bottom &&
                laserRect.bottom >= RpaddleRect.top) {
                clearInterval(interval);
                laser.remove();
                RpaddleHeight -= 10;
                Rpaddle.style.height = `${RpaddleHeight}px`;
            }
        } else if (direction === 'left') {
            laser.style.left = `${laser.offsetLeft - 10}px`;
            if (laserRect.left <= LpaddleRect.right &&
                laserRect.top <= LpaddleRect.bottom &&
                laserRect.bottom >= LpaddleRect.top) {
                clearInterval(interval);
                laser.remove();
                LpaddleHeight -= 10;
                Lpaddle.style.height = `${LpaddleHeight}px`;
            }
        }

        if (laser.offsetLeft < 0 || laser.offsetLeft > window.innerWidth) {
            clearInterval(interval);
            laser.remove();
        }
    }, 20);
}
let RpaddleWidth = 20;
let RpaddleHeight = 150;
let RpaddleYPosition = windowHeight / 2 - RpaddleHeight / 2;
let RpaddleYDirection = 15;
let RpaddleMovingUp = false;
let RpaddleMovingDown = false;
let leftScore = 0;
let rightScore = 0;
let element = document.body;

scoreboard.style.position = 'absolute';
scoreboard.style.top = '20px';
scoreboard.style.left = '50%';
scoreboard.style.transform = 'translateX(-50%)';
scoreboard.style.color = 'black';
scoreboard.style.fontSize = '24px';
scoreboard.style.fontFamily = 'Arial, sans-serif';
element.style.backgroundColor = "black";

const startButton = document.createElement('button');
const playAgainButton = document.createElement('button');

startButton.textContent = "Start Game";
playAgainButton.textContent = "Play Again";
playAgainButton.style.display = "none";
document.body.appendChild(startButton);
document.body.appendChild(playAgainButton);

[startButton, playAgainButton].forEach(button => {
    button.style.position = "absolute";
    button.style.top = "20%";
    button.style.left = "50%";
    button.style.transform = "translate(-50%, -50%)";
    button.style.padding = "10px 20px";
    button.style.fontSize = "18px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "5px";
    button.style.border = "none";
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";
});

startButton.addEventListener('click', () => {
    startButton.style.display = "none";
    gameInterval = setInterval(moveBall, 10); // Save the interval ID
    createBall();
    createLpaddle();
    createRpaddle();
    updateScoreboard();
});

function checkForWinner() {
    if (leftScore === 10 || rightScore === 10) {
        const winner = leftScore === 10 ? "Left Player" : "Right Player";
        scoreboard.innerHTML = `<span style="color: white; font-size: 32px;">${winner} Wins!</span>`;

        endGame();

        leftScore = 0;
        rightScore = 0;
    }
}

function endGame() {
    playAgainButton.style.display = "block";
    clearInterval(gameInterval);
}

playAgainButton.addEventListener('click', () => {
    playAgainButton.style.display = "none";

    leftScore = 0;
    rightScore = 0;
    updateScoreboard();
    resetBall();
    startButton.style.display = "block";
});


function updateScoreboard() {
    scoreboard.innerHTML = `Left: ${leftScore} | Right: ${rightScore}`;
    scoreboard.style.color = "white";
}

createBall();
createLpaddle();
createRpaddle();

function createBall() {
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}

function createLpaddle() {
    Lpaddle.style.height = `${LpaddleHeight}px`;
    Lpaddle.style.width = `${LpaddleWidth}px`;
    Lpaddle.style.backgroundColor = `blue`;
    Lpaddle.style.position = 'absolute';
    Lpaddle.style.left = "50px";
    Lpaddle.style.top = `${LpaddleYPosition}px`;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'w') {
            LpaddleMovingUp = true;
        }
        if (event.key === 's') {
            LpaddleMovingDown = true;
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'w') {
            LpaddleMovingUp = false;
        }
        if (event.key === 's') {
            LpaddleMovingDown = false;
        }
    });

    requestAnimationFrame(updateLpaddle);
}

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;


    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection *= -1;
    }


    if (
        ballXPosition <= 50 + LpaddleWidth &&
        ballYPosition + 2 * ballRadius >= LpaddleYPosition &&
        ballYPosition <= LpaddleYPosition + LpaddleHeight
    ) {
        ballXDirection *= -1;
        ballXPosition = 50 + LpaddleWidth; // Prevent ball from sticking
        ballSpeed += 1;
    }


    if (
        ballXPosition + 2 * ballRadius >= windowWidth - 50 - RpaddleWidth &&
        ballYPosition + 2 * ballRadius >= RpaddleYPosition &&
        ballYPosition <= RpaddleYPosition + RpaddleHeight
    ) {
        ballXDirection *= -1;
        ballXPosition = windowWidth - 50 - RpaddleWidth - 2 * ballRadius;
    }


    if (ballXPosition < 0) {
        rightScore++;
        resetBall();
    }

    if (ballXPosition > windowWidth - 2 * ballRadius) {
        leftScore = leftScore + 1;
        resetBall();
    }


    updateScoreboard();
    checkForWinner();
}

function resetBall() {
    ballXPosition = windowWidth / 2 - ballRadius;
    ballYPosition = windowHeight / 2 - ballRadius;
    ballXDirection *= -1;
    ballYDirection = Math.random() > 0.5 ? 1 : -1; // Randomize the vertical direction
}

function updateLpaddle() {
    if (LpaddleMovingUp) {
        LpaddleYPosition -= LpaddleYDirection;
    }
    if (LpaddleMovingDown) {
        LpaddleYPosition += LpaddleYDirection;
    }

    if (LpaddleYPosition < 0) {
        LpaddleYPosition = 0;
    }
    if (LpaddleYPosition > windowHeight - LpaddleHeight) {
        LpaddleYPosition = windowHeight - LpaddleHeight;
    }

    Lpaddle.style.top = `${LpaddleYPosition}px`;

    requestAnimationFrame(updateLpaddle);
}


function createRpaddle() {
    Rpaddle.style.height = `${RpaddleHeight}px`;
    Rpaddle.style.width = `${RpaddleWidth}px`;
    Rpaddle.style.backgroundColor = `red`;
    Rpaddle.style.position = 'absolute';
    Rpaddle.style.right = "50px";
    Rpaddle.style.top = `${RpaddleYPosition}px`;

    document.body.appendChild(Rpaddle);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            RpaddleMovingUp = true;
        }
        if (event.key === 'ArrowDown') {
            RpaddleMovingDown = true;
        }
    });


    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') {
            RpaddleMovingUp = false;
        }
        if (event.key === 'ArrowDown') {
            RpaddleMovingDown = false;
        }
    });

    requestAnimationFrame(updateRpaddle);
}

function updateRpaddle() {
    if (RpaddleMovingUp) {
        RpaddleYPosition -= RpaddleYDirection;
    }
    if (RpaddleMovingDown) {
        RpaddleYPosition += RpaddleYDirection;
    }

    if (RpaddleYPosition < 0) {
        RpaddleYPosition = 0;
    }
    if (RpaddleYPosition > windowHeight - RpaddleHeight) {
        RpaddleYPosition = windowHeight - RpaddleHeight;
    }

    Rpaddle.style.top = `${RpaddleYPosition}px`;

    requestAnimationFrame(updateRpaddle);
}
