const getPokemon = url  => {
  return new Promise((resolved, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4
  
      if (isRequestOk) {
        const data = JSON.parse(request.responseText)
        resolved(data)
      }
  
      if (isRequestNotOk) {
        reject('Não foi possível obter os dados')
      }
    })

    request.open('GET', url)
    request.send()
  })
}

getPokemon('https://pokeapi.co/api/v2/pokemon/charmander_UMA_URL_INEXISTENTE!')
  .then(pokemon => console.log(pokemon))
  .catch(error => console.log(error))

