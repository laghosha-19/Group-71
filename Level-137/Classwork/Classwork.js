let images  = [
    "./Images/Cover1.jpg",
    "./Images/Cover2.jpg", 
    "./Images/Cover3.jpg",
    "./Images/Cover4.jpg",
    "./Images/Cover5.png", ]

const previous = document.getElementById("prev")
const nextPhoto = document.getElementById("next")
const image = document.getElementById("image") 


let backgroundColors = [
    "black",
    "yellow",
    "green", 
    "red",
    "purple"
]


let index = 0

function next(){
    index++
    if(index >= images.length){
        index = 0
    }
    image.src = images[index]
    document.body.style.background = backgroundColors[index]
    document.body.style.border = backgroundColors[index]
}
function prev(){
    index--
    if(index < 0){
        index = image.length- 1
    }
    image.src = images[index]
    document.body.style.backgroundColor = backgroundColors[index]
}

nextPhoto.addEventListener("click", next)
previous.addEventListener("click", prev)

