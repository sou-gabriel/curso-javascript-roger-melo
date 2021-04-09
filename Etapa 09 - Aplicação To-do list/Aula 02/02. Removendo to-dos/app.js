const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  
  if (inputValue.length) {
    todosContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `
    event.target.reset()
  }
})

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target

  if (Array.from(clickedElement.classList).includes('delete')) {
    clickedElement.parentElement.remove()
  }
})