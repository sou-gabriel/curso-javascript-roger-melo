const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
  event.preventDefault()

  const username = event.target.username.value
  const usernameRegex = /^[a-zA-Z]{6,12}$/
  const isAValidUsername = usernameRegex.test(username)

  if (isAValidUsername) {
    feedback.textContent = 'Valor válido =)'
    return
  }  

  feedback.textContent = 'Username deve conter apenas letras e deve ter entre 6 a 12 caracteres'
})