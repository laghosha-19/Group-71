const addBtn = document.getElementById("add-btn")


addBtn.addEventListener("click", function addTask(){
    let input = document.getElementById("Task-inp").value
    const ul = document.getElementById("task-list")
    const li = document.createElement("li");
    const task = input.trim()

    if(task === ""){
        return;
    }

    let RemoveBtn = document.createElement("button")
    RemoveBtn.textContent = "Remove"
    li.appendChild(RemoveBtn)

    RemoveBtn.addEventListener("click", function(){
        
    })


    const span = document.createElement('span')
    span.textContent  = input;
    // edit task
    let editTask = document.createElement("button")
    editTask.textContent = "Edit"
    li.appendChild(editTask)
    ul.appendChild(span)

    editTask.addEventListener("click", function(){
        let inp = prompt("Enter Edited Task:")
        if(inp === "" || inp === " "){
            span.textContent = inp
        }else(span.textContent = editTask)
    } )
    
    ul.appendChild(li)
    li.appendChild(span)

    input  = "" 
    const btn1 = document.createElement("button")

})