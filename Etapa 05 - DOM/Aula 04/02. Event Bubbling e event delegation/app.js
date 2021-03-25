const ul = document.querySelector('ul')
const button = document.querySelector('button')
const lis = document.querySelectorAll('li')

button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.prepend(li)
})

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    console.log('Clicou na LI')
    clickedElement.remove()
  })
})

ul.addEventListener('click', () => {
  console.log('Clicou na UL')
})