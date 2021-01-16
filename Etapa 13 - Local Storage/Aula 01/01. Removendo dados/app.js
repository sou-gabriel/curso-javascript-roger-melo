localStorage.setItem('name', 'Gabriel Ramos Nogueira')
localStorage.setItem('age', '19')

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log({ name, age })

// localStorage.removeItem('age')
localStorage.clear()

name = localStorage.getItem('name')
age = localStorage.getItem('age')
debugger