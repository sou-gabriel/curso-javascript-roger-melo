// Caso de uso em strings
const str = 'abc'

console.log([...str])

const getReversedString = string => [...string]
  .reverse()
  .join('')

console.log(getReversedString('123'))

// const getReversedString = string => string
//   .split('')
//   .reverse()
//   .join('')

// console.log(getReversedString('123'))


// Caso de uso em funções
const numbers = [7, 3, 5, 3.1, 9]

console.log(...numbers)
console.log(Math.min(...numbers))
console.log(Math.max(...numbers))