const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <br> Try double clicking me."
})

element1.addEventListener('dbclick', ()=>{
    element1.innerHTML = "I've been double clicked! <br> Try single clicking me."
})


element2.addEventListener('mouseover', ()=>{
    element2.style.color = "green"
    element2.style.backgroundColor = "blue"
})

element2.addEventListener('mouseover', ()=>{
    element2.style.color ="white"
    element2.style.backgroundColor = "#BB33BB"
})

let positionY = 0;
let positionX = 0;

document.addEventListener('keyup', (event)=>{
    console.log("Hello")

    if (event.key == 'ArrowDown') {
        positionY = positionY + 10
    }
    else if (event.key == 'ArrowUp') {
    positionY = positionY - 10
}

element3.style.top = '${positionY}px'
})









element4.addEventListner('click', ()=>{
    element4.style.width = "10px"
    element4.style.height = "10px"
    element4.innerHTML = ""
    element4.style.opacity = .3
})


document.addEventListner('keyup', (event)=>{
    if (event.key == 'j'){
         element4.style.width = "300px"
         element4.style.height = "50px"
         element.innerHTML = "<h4>Click me to make me small. <br> Press 'j' to bring me back. </h4>"
    }
})



const list = ['running', 'paused']
let index = 0
element5.addEventListener('click', ()=>{
    element5.style.animationPlayState = list[index]
})
