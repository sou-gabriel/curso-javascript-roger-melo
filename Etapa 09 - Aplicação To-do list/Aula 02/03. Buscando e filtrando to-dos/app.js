const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

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

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()

  addTodo(inputValue)
})

const removeTodo = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash
  
  if (trashDataValue) {
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)
    todo.remove()
  }
}

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target 

  removeTodo(clickedElement)
})

const filterTodos = (todos, inputValue, returnMatchedTodos) => {
  return todos.filter(todo => {
    const matchedTodo = todo.textContent.includes(inputValue)
    return returnMatchedTodos ? matchedTodo : !matchedTodo
  })
}

const manipulateClasses = (todos, classToRemove, classToAdd) => {
  todos.forEach(todo => {
    todo.classList.remove(classToRemove)
    todo.classList.add(classToAdd)
  })
}

const hideTodos = (todos, inputValue) => {
  const todosToHide = filterTodos(todos, inputValue, false)
  manipulateClasses(todosToHide, 'd-flex', 'hidden')
}

const showTodos = (todos, inputValue) => {
  const todosToShow = filterTodos(todos, inputValue, true)
  manipulateClasses(todosToShow, 'hidden', 'd-flex')
}
 
inputSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim()
  
  const todos = Array.from(todosContainer.children)

  hideTodos(todos, inputValue)
  showTodos(todos, inputValue)
})
