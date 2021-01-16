const myArray = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 }
]

localStorage.setItem('myArray', JSON.stringify(myArray, null, 2))

const JSONFromLocalStorage = localStorage.getItem('myArray')
const myArrayConverted = JSON.parse(JSONFromLocalStorage)

console.log(myArrayConverted)