const paragraph = document.querySelector('p')
const error = document.querySelector('p.error')
const divError = document.querySelector('div.error')

// console.log(paragraph, error, divError)

const paragraphs = document.querySelectorAll('p')
const errors = document.querySelectorAll('.error')

console.log(errors, errors[0])

errors.forEach(error => {
  console.log(error)
})