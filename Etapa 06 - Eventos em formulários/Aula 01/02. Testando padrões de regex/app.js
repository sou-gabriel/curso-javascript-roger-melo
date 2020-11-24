const form = document.querySelector('.signup-form')
//  const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(event.target.username.value)
})

const username = 'rogerm123'
const pattern = /^[a-z]{6,}$/
// const isAMatch = pattern.test(username)

// if (isAMatch) {
//   console.log('O teste da regex passou =)')
// } else {
//   console.log('O teste da regex não passou =(')
// }

const result = username.search(pattern)