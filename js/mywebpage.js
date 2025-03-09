function makeDisappear() {
    const box = document.getElementById("box");
    box.style.opacity = 0;
    box.style.visibility = "hidden";
}

function makeReappear() {
    const box = document.getElementById("box");


    const randomTop = Math.random() * 400;
    const randomLeft = Math.random() * 400;

    box.style.top = randomTop + "px";
    box.style.left = randomLeft + "px";


    box.style.opacity = 1;
    box.style.visibility = "visible";
}


function explodeBox() {
    const explodeBox = document.getElementById("explodeBox");


    explodeBox.classList.add("exploding");


    setTimeout(() => {
        explodeBox.style.visibility = "hidden";  
    }, 500);
}
