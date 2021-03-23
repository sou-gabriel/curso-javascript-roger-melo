const paragraph = document.querySelector('p')

// paragraph.innerText += 'Texto inserido'

const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index) => {
//   paragraph.innerText += ` Novo texto ${index + 1}`
// })

const div = document.querySelector('.content')

// div.innerHTML += `<h2>Novo h2</h2>`

const people = ['Jonatan', 'Vinicius', 'Diego']

people.forEach(person => {
  div.innerHTML += `<p>${person}</p>`
})

// getters setters
// get     set