const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('#btn');
const todoContainer = document.querySelector('.todo-container')

// Event Listeners
todoBtn.addEventListener('click', createTodo)

// Functions
function createTodo(e){
  e.preventDefault()
  const todo = document.createElement('div')
  todo.setAttribute('class', 'todo')
  todo.innerText = todoInput.value;
  todoContainer.appendChild(todo)
  todoInput.value = "";
  const trashBtn = document.createElement('button')
  trashBtn.setAttribute('class', 'trash-btn')
  trashBtn.innerText = 'delete';
  todo.appendChild(trashBtn)
  trashBtn.addEventListener('click', deleteTodo)
}
function deleteTodo(e) {
  e.target.parentElement.remove()
}