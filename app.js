let newTodo = document.querySelector('#newTodo');
let list = document.querySelector('.list');
let addTodoBtn = document.querySelector('.addTodoBtn');
let resetBtn = document.querySelector('.resetBtn')
let removeBtn = document.querySelector('.removeBtn')


//Add a todo to the list of items
addTodoBtn.addEventListener('click', insert)
// newTodo.addEventListener('change', addTodo) //type enter to add the todo



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

    newDiv.classList.add("py-1")
    newCheckBox.type = "checkbox"
    newCheckBox.classList.add("box")
    newCheckBox.classList.add("form-check-input")
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

    clear() //clear the input

    removeBtn.addEventListener('click', remove) //remove selected todo(s)
    newCheckBox.addEventListener('click', cancel) //cross out selected todo(s)
}



//Function to remove checked items
function remove() {
    let boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        if (box.checked) {
            box.parentElement.remove()
        }
    });
}



//Function to clear the input field 
function clear() {
    newTodo.value = ""
}


//Function to cancel a todo
function cancel() {
    let boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        let parentBox = box.parentElement 
        
        if (box.checked) {
            parentBox.style.textDecorationLine = "line-through"
        } else {
            parentBox.style.textDecorationLine = "none"
        }
    });
}








