// Selector (gets the first matching class in the document)
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

// Functions
function addTodo(e){
    // Prevent form from submitting
    e.preventDefault();

    // Create Todo DIV inside ul
    const todoDiv = document.createElement('div');

    // Add a class to the todo div
    todoDiv.classList.add('todo');

    // Create list items 
    const newTodo = document.createElement('li');

    // Add text from the input to the li
    newTodo.innerText = todoInput.value;

    // add a class to the todo li
    newTodo.classList.add('todo-item');

    // Place each todo li inside the Todo div
    todoDiv.appendChild(newTodo);
    // Add todo to local storage
    saveLocalTodos(todoInput.value);

    // Create completed button
    const completedButton = document.createElement('button');

    // Add check icon to button
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    
    // Add the button to the Todo div
    todoDiv.appendChild(completedButton);

    // Create delete button
    const deleteButton = document.createElement('button');

    // Add trash icon to button
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    
    // Add the button to the Todo div
    todoDiv.appendChild(deleteButton);

    // Append to List
    todoList.appendChild(todoDiv);

    // Clear todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    // Delete ToDo
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }

    // Check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
                const mStyle = todo.style;
                if (mStyle != undefined && mStyle != null) {
                    switch (e.target.value) {
                        case "all":
                            mStyle.display = "flex";
                            break;
                        case "completed":
                            if (todo.classList.contains('completed')) {
                                mStyle.display = 'flex';
                            } else {
                                mStyle.display = "none";
                            }
                            break;
                        case "uncompleted":
                            if (todo.classList.contains('completed')) {
                                mStyle.display = 'none';
                            } else {
                                mStyle.display = "flex";
                            }
                            break;
                    }
                }
    });
}


function saveLocalTodos(todo){
    // Check if an todos already in there
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        // Create Todo DIV inside ul
    const todoDiv = document.createElement('div');

    // Add a class to the todo div
    todoDiv.classList.add('todo');

    // Create list items 
    const newTodo = document.createElement('li');

    // Add text from the input to the li
    newTodo.innerText = todo;

    // add a class to the todo li
    newTodo.classList.add('todo-item');

    // Place each todo li inside the Todo div
    todoDiv.appendChild(newTodo);

     // Create completed button
     const completedButton = document.createElement('button');
 
     // Add check icon to button
     completedButton.innerHTML = '<i class="fas fa-check"></i>';
     completedButton.classList.add('complete-btn');
     
     // Add the button to the Todo div
     todoDiv.appendChild(completedButton);
 
     // Create delete button
     const deleteButton = document.createElement('button');
 
     // Add trash icon to button
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
     deleteButton.classList.add('delete-btn');
     
     // Add the button to the Todo div
     todoDiv.appendChild(deleteButton);
 
     // Append to List
     todoList.appendChild(todoDiv);
    });
}

