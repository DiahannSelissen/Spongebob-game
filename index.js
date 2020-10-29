let spongebob = document.getElementById("spongebob")
let modifier = 40;

window.addEventListener("load", () => {
    spongebob.style.position = "absolute"
    spongebob.style.left = 0;
})

window.addEventListener("keydown", (event)=>{
    switch(event.key){
        case 'ArrowLeft': spongebob.style.left = parseInt(spongebob.style.left) - modifier + "px";
        console.log("moveLeft")
        break
        case 'ArrowRight': spongebob.style.left = parseInt(spongebob.style.left) + modifier + "px"; 
        console.log("moveRight")
        break
    }
})

let patrick = document.getElementById("patrick")

function getNumber(){
    return Math.floor(Math.random() * 5) + 1
}
console.log(getNumber())

setInterval(() => {
    console.log(getNumber())
}, 500);