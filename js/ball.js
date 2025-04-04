const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius


setInterval(moveBall, 10)
function moveBall(){
    ball.style.left = ballXPosition + 5
    ball.style.left = `${ballXPosition}px`
}

createBall()
function createBall(){
    document.body.appendChild(ball)
    ball.style.height =`${2 * ballRadius}px`
    ball.style.width =`${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}
