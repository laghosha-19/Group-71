
let form = document.querySelector("form")



form.addEventListener("submit", function(e){
    e.preventDefault()

    let name1 = document.getElementById("Name").value
    let email = document.getElementById("Emal").value
    let pass = document.getElementById("Pass").value
    let confirm= document.getElementById("Cpass").value

    if(name1.length < 8){
        alert("Name should be minuim 8 characters!!!")
        return
    }
    if(pass.length < 8){
        alert("Password shuld be minimum 8 characters!!!")
        return
    }
    if(pass !== confirm){
        alert("passwords shuld be matching each other!!!")
    }else(alert("Reg Succsecc!!!"))
})










