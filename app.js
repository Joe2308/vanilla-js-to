// Selector (gets the first matching class in the document)
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo);

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