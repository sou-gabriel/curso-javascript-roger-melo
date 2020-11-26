const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
  event.preventDefault()

  const isAValidUsername = testUsername(event.target.username.value)

  if (isAValidUsername) {
    feedback.textContent = 'O valor do input é válido =)'
    return
  }

  feedback.textContent = 'O input deve conter apenas letras e deve ter entre 6 a 12 caracteres'
})

form.username.addEventListener('keyup', event => {  
  feedback.textContent = null

  const isAValidUsername = testUsername(event.target.value)

  if (isAValidUsername) {
    event.target.setAttribute('class', 'sucess')
    return
  }

  event.target.setAttribute('class', 'error')
})