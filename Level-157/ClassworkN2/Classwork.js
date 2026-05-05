const add = document.getElementById("add")
const minus = document.getElementById("minus")
const starter  = document.getElementById("starter")


minus.addEventListener("click", function(){
    starter.textContent = Number(starter += 1)
    
})
