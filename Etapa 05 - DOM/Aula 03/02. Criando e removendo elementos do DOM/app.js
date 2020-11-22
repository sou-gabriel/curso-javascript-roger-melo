/*
  - Obter a referência do elemento;
  - Adicionar um listener de evento neste elemento;
  - Executar uma ação.
*/

const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
const button = document.querySelector('button')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.remove()
  })
})

button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Novo texto'
  // ul.prepend(li) 
  ul.append(li)
})