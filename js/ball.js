const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

createBall()
function createBall(){
    document.body.appendChild(ball)
    ball.style.height =`${2 * ballRadius}px`
    ball.style.width =`${2 * ballRadius}px`
    ball.style.height = "100px"
    ball.style.width = "100px"
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = "30px"
    ball.style.left = "30px"
    ball.style.top = `${windowHeight/2}px`
    ball.style.left = `${windowHeight/2}px`
}
