const input = document.getElementById("name-inp")
const submit = document.getElementById("Submitbtn")
const heading = document.getElementById("heading2")

submit.addEventListener("click", display)

function display(){
    localStorage.setItem("name", input.value)
    console.log(localStorage.getItem("name"));
    heading.innerHTML = `Hello ${localStorage.getItem("name")} `

}

// setItem(key , value)


// getItem(key) => value


//getItem("name") => "Lika"  


// 1 step --> მონაცემების დამახსოვრება localStorage - ში (SetItem)

// 2 step --> მივწვდეთ შენახულ მონაცემს localStorage - დან (getItem)

