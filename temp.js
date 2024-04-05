// // // // const heading = document.createElement('h1')

// // // // heading.textContent = 'Swati'
// // // // // console.log(heading)

// // // const div = document.createElement('div')

// // // document.body.appendChild(div)
// // // // div.appendChild(heading)

// // // // const button = document.createElement('button')
// // // // button.textContent = "Change Heading"
// // // // div.appendChild(button)

// // // // onclick by dynamically
// // // // button.onclick = function(){
// // // //     heading.textContent = "Saurav"
// // // //     heading.style.color = "blue"
// // // //     heading.style.fontSize = "40px"
// // // //     heading.style.fontFamily = "Roboto"
// // // //     heading.style.textDecoration = "underline"
// // // // }

// // // // create object in js directly
// // // // let obj = {
// // // //     name: "Swati",
// // // //     age: [22, 23, 20],
// // // //     "1name": "Saurav",//invalid identifier, we give double quotes for avoiding error
// // // //     run: function(){
// // // //         console.log("running")
// // // //     },
// // // //     car: {
// // // //         modal:22
// // // //     }
// // // // }

// // // // console.log(obj.car.modal)//accessing value inside object inside object

// // // // console.log(obj.age[2])

// // // // console.log(obj.run)
// // // // obj.run()

// // // // console.log(obj.name);
// // // // console.log(obj['age']);
// // // // console.log(obj['1name']);
// // // // console.log(obj.gender)

// // // // let {name, age} = obj
// // // // console.log(name, age)

// // // // obj.name = "Me"
// // // // // console.log(obj.name)
// // // // console.log(obj['name'])


// // // // creating checkbox directly
// // // const input = document.createElement('input')
// // // input.type = 'checkbox'
// // // input.id = 'mycheckbox'
// // // div.appendChild(input)

// // // const label = document.createElement('label')
// // // // label.htmlFor = 'mycheckbox'
// // // label.textContent = 'Graduated'
// // // div.appendChild(label)

// // // // giving id and for using setAttribute
// // // label.setAttribute("for", "mycheckbox")


// // Local Storage
// const inputElement = document.getElementById('todoUserInput');

// const storedText = localStorage.getItem('userText');

// if (storedText) 
// {
//     inputElement.value = storedText;
// }

// inputElement.addEventListener('input', function() {
//     localStorage.setItem('userText', inputElement.value);
// });

// let todolist = [
//     {text:"Learn HTML", uniqueno: 1},
//     {text:"Learn CSS", uniqueno: 2},
//     {text:"Learn JS", uniqueno: 3}
// ]

// for (let todo of todolist){
//     createAndAppendTodo(todo)
// }

// function createAndAppendTodo(todo){
//     const todolistcontainer = document.getElementById('todoItemsContainer')

//     const list = document.createElement('li')
//     list.classList.add("todo-item-container", "d-flex", "flex-row")
//     todolistcontainer.appendChild(list)

//     const input = document.createElement("input")
//     input.classList.add("checkbox-input")
//     input.type = "checkbox"
//     let checkboxId = "checkbox" + todo.uniqueno
//     input.setAttribute("id",checkboxId);
//     list.appendChild(input)

//     const div = document.createElement('div')
//     div.classList.add("d-flex", "flex-row", "label-container")
//     list.appendChild(div)

//     const label = document.createElement('label')
//     label.classList.add("checkbox-label")
//     label.htmlFor = checkboxId;
//     label.textContent = todo.text
//     div.appendChild(label)

//     const innerdiv = document.createElement('div')
//     innerdiv.classList.add("delete-icon-container")
//     div.appendChild(innerdiv)

//     const iElement = document.createElement('i')
//     iElement.classList.add("far", "fa-trash-alt", "delete-icon")
//     innerdiv.appendChild(iElement)

//     input.onclick = function(){
//         if (input.checked) 
//         {
//             label.style.textDecoration = 'line-through';
//         } 
//         else 
//         {
//             label.style.textDecoration = 'none';
//         }
//     }
    
// }

const inputElement = document.getElementById('todoUserInput');

const storedText = localStorage.getItem('userText');

if (storedText) 
{
    inputElement.value = storedText;
}

inputElement.addEventListener('input', function() {
    localStorage.setItem('userText', inputElement.value);
});


let todolist = [];

// Check if there are tasks in local storage
if(localStorage.getItem('todolist')) {
    todolist = JSON.parse(localStorage.getItem('todolist'));
    for (let todo of todolist){
        createAndAppendTodo(todo);
    }
}

const addTodoButton = document.querySelector('.add-todo-button');
const todoUserInput = document.getElementById('todoUserInput');

addTodoButton.addEventListener('click', function() {
    const userInputValue = todoUserInput.value.trim();
    if (userInputValue !== '') 
    {
        const newTodo = 
        {
            text: userInputValue,
            uniqueno: Date.now() 
        };
        todolist.push(newTodo);
        createAndAppendTodo(newTodo);
        localStorage.setItem('todolist', JSON.stringify(todolist));
        todoUserInput.value = '';
    }
});

function createAndAppendTodo(todo){
    const todolistcontainer = document.getElementById('todoItemsContainer');

    const list = document.createElement('li');
    list.classList.add("todo-item-container", "d-flex", "flex-row");
    todolistcontainer.appendChild(list);

    const input = document.createElement("input");
    input.classList.add("checkbox-input");
    input.type = "checkbox";
    let checkboxId = "checkbox" + todo.uniqueno;
    input.setAttribute("id", checkboxId);
    list.appendChild(input);

    const div = document.createElement('div');
    div.classList.add("d-flex", "flex-row", "label-container");
    list.appendChild(div);

    const label = document.createElement('label');
    label.classList.add("checkbox-label");
    label.htmlFor = checkboxId;
    label.textContent = todo.text;
    div.appendChild(label);

    const innerdiv = document.createElement('div');
    innerdiv.classList.add("delete-icon-container");
    div.appendChild(innerdiv);

    const iElement = document.createElement('i');
    iElement.classList.add("far", "fa-trash-alt", "delete-icon");
    innerdiv.appendChild(iElement);

    input.onclick = function(){
        if (input.checked) 
        {
            label.style.textDecoration = 'line-through';
        } 
        else 
        {
            label.style.textDecoration = 'none';
        }
    }

    iElement.addEventListener('click', function() {
        todolist = todolist.filter(item => item.uniqueno !== todo.uniqueno);
        localStorage.setItem('todolist', JSON.stringify(todolist));
        list.remove();
    });
}


