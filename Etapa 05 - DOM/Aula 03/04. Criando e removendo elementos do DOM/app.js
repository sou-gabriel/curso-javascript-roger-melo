const ul = document.querySelector('ul')

// ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.remove()
  })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.prepend(li)
})