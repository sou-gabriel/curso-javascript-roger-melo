const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível obter os dados', null)
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