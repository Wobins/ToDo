$(".addBtn").click(insert);



function insert() {
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    let list = document.querySelector(".content");
    let todoInput = document.querySelector(".todoInput")

    let todo = todoInput.value;
    checkbox.type = "checkbox";
    checkbox.value = todo;

    label.style.display = "block";
    label.append(checkbox);
    label.append(todo);
    list.append(label);

    let checkBoxes = $("input[type=checkbox]");
    let arr = Array.from(checkBoxes);
    console.log(arr)
   
}


// function insert() {
//     let item = document.querySelector('#item').value;
//     let input = document.createElement("input");
//     let label = document.createElement("label");
//     let div = document.createElement("div");

//     if(item != ""){
//         div.classList.add("form-check");
//         label.classList.add("form-check-label");
//         input.classList.add("form-check-input");

//         //input.id = "note";
//         input.type = "checkbox";
//         input.value = item
//         //label.htmlFor = "note";

//         label.append(item);
//         div.append(input);
//         div.append(label);
        
//         $(".content").append(div);

//         let inputs = document.querySelectorAll("input[type=checkbox]")
//         let inst = Array.from(inputs)
        
//         // inputs.forEach(el => {
//         //     el.addEventListener('click', () => {
//         //         let text = el.nextSibling;
//         //         console.log(text)
//         //         text.classList.toggle("to-remove")
//         //     })
//         // })

//         for (const el of inst) {
//             el.addEventListener('change', () => {
//                 // let newTodo = el.nextSibling;
//                 // console.log(newTodo)
//                 // newTodo.classList.toggle("done")
//                 if (this.checked) {
//                     el.nextSibling.classList.add("done")
//                     console.log("Checkbox is checked..");
//                   } else {
//                     el.nextSibling.classList.remove("done")
//                     console.log("Checkbox is not checked..");
//                   }
                
//             })
            
//         }
//     }
   
    
// }





