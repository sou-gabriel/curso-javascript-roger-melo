const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }

    if (request.readyState === 4) {
      callback('Não foi possível obter os dados da API', null)
    }
  })

  request.open('GET', './todos.json')
  request.send()
}

getTodos((error, data) => {
  if (error) {
    console.log(error)
    return
  }

  console.log(data)
})