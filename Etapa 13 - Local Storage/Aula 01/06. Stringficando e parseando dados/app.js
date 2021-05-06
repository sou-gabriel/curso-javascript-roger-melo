const myArray = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, d: 6 }
]

localStorage.setItem('myArray', JSON.stringify(myArray))

const JSONFromLocalStorage = localStorage.getItem('myArray')
const myConvertedArray = JSON.parse(JSONFromLocalStorage)

console.log(myConvertedArray)