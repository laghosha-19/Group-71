const Name  = document.getElementById("Name")
const Surname  = document.getElementById("Surname")
const Email = document.getElementById("Email")
const Pass = document.getElementById("Password")


function SaveUserData(){
    if(!Name.value || !Surname.value || !Email.value || !Pass.value){
        alert("Please fill all the fields!!!")
        return
    }

    const userData = {
        name: Name.value,
        email: Email.value,
        surname: Surname.value,
        pass:Pass.value
    }

    localStorage.setItem("userinfo", JSON.stringify(userData))
}



function getUserData(){
    const data = localStorage.getItem(userInfo)

    if(data){
        const user  = JSON.parse(data)

        Name.value = user.name
        Surname.value = user.surname
        Email.value = user.email
        Pass.value = user.pass
    }
}
