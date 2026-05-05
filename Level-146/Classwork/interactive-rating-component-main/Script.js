const inpts = document.querySelectorAll("input")
const button = document.getElementById("btn")
const first = document.getElementsByClassName("main")[0]
const second  = document.getElementById("second-div")
const out  = document.getElementById("out")

let selectedInpts = 5


button.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(selectedInpts)
    first.style.display = "none"
    second.style.display = "flex"
    out.textContent = `you selected ${selectedInpts} out of 5 `
})

inpts.forEach((inputs)=> {
    inputs.addEventListener("click", (e) => {
        selectedInpts =inputs.value
    })
})
