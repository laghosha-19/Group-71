const Name = document.getElementById("name")
const surname = document.getElementById("surname")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const from = document.querySelector("form")
const id  = Date.now()



from.addEventListener("submit", function(){
        if(!Name.value || !surname.value || !email.value || !pass.value ){
            alert('enter valid values!!!')
    
            return
        }
    
        const userData = {
            Name: Name.value,
            surname: surname.value,
            email:email.value,
            pass:pass.value
        }
    
        localStorage.setItem(id, JSON.stringify(userData))

        const data = localStorage.getItem("userinfo")
    
        if(data){
            const userData = JSON.parse(data)
    
    
            Name.value = data.Name
            surname.value = data.surname
            email.value = data.email
            pass.value = data.pass
        }
})    


