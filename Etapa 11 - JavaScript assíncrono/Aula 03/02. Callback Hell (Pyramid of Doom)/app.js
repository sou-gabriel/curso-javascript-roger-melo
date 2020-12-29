const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }

    if (request.readyState === 4) {
      callback('Não foi possível obter os dados', null)
    }
  })

  request.open('GET', url)
  request.send()
}

// Objetivo: Realizar uma segunda requisição, mas só quando a primeira terminar
getTodos('./json/todos.json', (error, data) => {
  console.log(data)
  // nesse ponto a primeira requisição foi completada, o que indica que eu posso realizar minha segunda requisição logo abaixo
  getTodos('./json/todos-02.json', (error, data) => {
    console.log(data)
    getTodos('./json/todos-03.json', (error, data) => {
      console.log(data)
    })
  })
})