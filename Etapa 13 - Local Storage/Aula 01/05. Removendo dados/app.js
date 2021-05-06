localStorage.setItem('name', 'Roger')
localStorage.setItem('age', 32)

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(name, age)

localStorage.clear()

// localStorage.removeItem('name')

name = localStorage.getItem('name')
age = localStorage.getItem('age')
debugger