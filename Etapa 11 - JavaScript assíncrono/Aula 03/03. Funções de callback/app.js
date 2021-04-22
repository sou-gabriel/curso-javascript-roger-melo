const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(null, request.responseText)
      return
    }

    if (request.readyState === 4) {
      callback('Não foi possível obter os dados da API', null)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/users')
  request.send()
}

console.log(1)
console.log(2)

getTodos((error, data) => {
  if (error) {
    console.log(error)
    return
  }

  console.log(data)
})

console.log(3)
console.log(4)
// ...