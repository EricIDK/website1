const ball = document.createElement('div')
document.body.appendChild(ball)
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPaddelWidth = 20
let LPaddelHeight = 100
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1
let LPadelYPosition

setInterval(moveBall, 10)

createBall()


function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }

}

function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "black"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px`
}

create LPadel ()
function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = 'blue'
    LPadel.style.position = 'absolute'
    LPadelstyle.left = '50px'
    LPadel.style.top = `${windowHeight / 2 - LPadelHeight / 2}px`
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        //move up
    }
    if (event.key == 's') {
        //move down
    }
})


let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPaddleTop = LPaddleYPosition
let LPaddleBottom = LPaddleYPosition + LPaddleHeight
let LPaddleRight = LPaddleXPosition + LPaddleWidth


if(
    (ballBottom >= LPaddleTop) &&
    (ballTop <= LPaddleBottom) &&
    (ballLeft <= LPaddleRight) &&
    (ballXDirection == -1)
) {
    ballXDirection = ballXDirection * -1
}

wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function movelPaddle() {
    if (wKey == true && LPadddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (wKey == true && LPadddleYPosition > windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
}
LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()

let score = 0 // Display the score and incerase score by one every time the ball hits the paddle.
let level = 1 // Display the level and increase the level by one every time the score increases by 10
// As the levels increase, increase the ball speed

