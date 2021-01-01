fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(users => console.log(users))
  .catch(error => console.log(error))