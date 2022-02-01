let newTodo = document.querySelector('#newTodo');
let list = document.querySelector('.list');
let addTodoBtn = document.querySelector('.addTodoBtn');
let resetBtn = document.querySelector('.resetBtn')

console.log(newTodo)
console.log(list)
console.log(addTodoBtn)

//Add a todo to the list of items
addTodoBtn.addEventListener('click', insert)

//reset the list when we click on the reset button
resetBtn.addEventListener('click', resetList) 


//Function to reset the list
function resetList () {
    let divs = document.querySelectorAll('.item') //select all items block
    
    divs.forEach(div => {
        div.remove()
    });
}


//Function to add a todo to the list
function insert() {
    let newDiv = document.createElement('div');
    let newCheckBox = document.createElement('input');

    newCheckBox.type = "checkbox"
    newDiv.classList.add("item")

    let todo = newTodo.value;
    console.log(todo)

    if (todo) {
        list.append(newDiv);
        newDiv.append(newCheckBox);
        newDiv.append(todo);
    } else {
        alert("Enter a to-do")
    }
}







