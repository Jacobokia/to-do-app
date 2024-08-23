let inputField = document.querySelector("input");
let button = document.querySelector("button");
let toDoList = document.querySelector("ul")

button.addEventListener('click', function (event) {
    let newTodo = inputField.value

    let newTodoElement = document.createElement("li")

    newTodoElement.innerHTML = newTodo

    toDoList.appendChild(newTodoElement)

    inputField.value = ""

})