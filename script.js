let inputField = document.querySelector("input");
let button = document.querySelector("button");
let toDoList = document.querySelector("ul")
let editIcon = `<i class="fa fa-trash-o" aria-hidden="true"></i>`
let edit = document.getElementById("edit")
let deleteSpan = document.getElementById("delete")
let listContainer = document.getElementById("list-container")

let span = document.createElement("span")
span.innerHTML = "\u00d7";

//on page load, get all the todos from the local storage
document.addEventListener('DOMContentLoaded', function(){
    let storedTodos = localStorage.getItem("toDoItems")

    if (storedTodos!==null){
        let currentTodos = JSON.parse(storedTodos)
        currentTodos.forEach(function(todo) {

            let newTodoElement = document.createElement("li")

            newTodoElement.innerText = todo

            toDoList.appendChild(newTodoElement)
       

            
        })
    }

})



button.addEventListener('click', function (event) {
    let newTodo = inputField.value

    let newTodoElement = document.createElement("li")
    newTodoElement.innerText = newTodo
    toDoList.appendChild(newTodoElement)


    newTodoElement.appendChild(span)
    

    /*---- start storage in local storage ---*/
    let storedTodos = localStorage.getItem("toDoItems")
    if(storedTodos !== null){
        let currentTodos = JSON.parse(storedTodos)
        currentTodos.push(inputField.value)
        localStorage.setItem("toDoItems", JSON.stringify(currentTodos))
    }else{

        //add each todo into an array
    let toDosArray = [];
    toDosArray.push(inputField.value);

    //store the todo's array to local storage
    localStorage.setItem("toDoItems", JSON.stringify(toDosArray))
    }

    inputField.value = ""


})

listContainer.addEventListener('click', function (event) {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
    }else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove()
    }
},false)

