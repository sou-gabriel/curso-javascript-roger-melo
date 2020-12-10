const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addTodo = inputValue => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
    </li>
    `
    formAddTodo.reset()
  } 
}

const removeTodo = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)
  
  if (trashDataValue) {
    todo.remove()
  }
}

const filterTodos = (todos, inputValue, returnMatchedTodos) => {
  return todos
    .filter(todo => {
      const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
      return returnMatchedTodos ? matchedTodos : !matchedTodos
    })
}

const setTodosVisibility = (todos, classToRemove, classToAdd) => {
  todos.forEach(todo => {
    todo.classList.remove(classToRemove)
    todo.classList.add(classToAdd)
  })  
}

const hideTodos = (todos, inputValue) => {
  const todosToHide = filterTodos(todos, inputValue, false)
  setTodosVisibility(todosToHide, 'd-flex', 'hidden')
}

const showTodos = (todos, inputValue) => {
  const todosToShow = filterTodos(todos, inputValue, true)
  setTodosVisibility(todosToShow, 'hidden', 'd-flex')
}

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
  
  const inputValue = event.target.add.value.trim()
  addTodo(inputValue)
})

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  removeTodo(clickedElement)
})

inputSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children)

  hideTodos(todos, inputValue)
  showTodos(todos, inputValue)    
})