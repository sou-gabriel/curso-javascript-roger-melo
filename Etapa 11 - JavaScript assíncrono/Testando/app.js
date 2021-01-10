const getTodos = () => {
  return new Promise((resolve) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(request.responseText)
      }
    })

    request.open('GET', './todos.json')
    request.send()
  })
}

console.log(1)
console.log(2)

console.log(getTodos())

console.log(3)
console.log(4)