const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      callback(null, request.responseText)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível obter os dados', null)
    }

  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

getTodos((error, data) => {
  console.log('Callback executada')

  if (error) {
    console.log(error)
    return
  }

  console.log(data)
})

/*
  *** Anotações ***
  - Criar uma função que armazena nossa requisição para deixá-la re-utilizável;
  - Reagir de maneiras diferentes às respostas da requisição;
  - Exibir no console.log apenas o valor armazenado em um dos parâmetros.
*/

// getTodos((error, data) => {
//   if (error) {
//     console.log(error)
//     return
//   }

//   console.log(data)
// })