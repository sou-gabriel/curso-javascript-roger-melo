const getPokemon = url => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      }

      if (request.readyState === 4) {
        reject('Não foi possível obter os dados')
      }
    })

    request.open('GET', url)
    request.send()
  })
}

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(value => console.log(value))
  .catch(error => console.log(error))
