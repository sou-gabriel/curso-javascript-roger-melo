// Inteiros e decimais
const radius = 10
const pi = 3.14
console.log(radius, pi)

// Operadores aritméticos
const area = pi * radius ** 2 
console.log(area)

// Precedência aritimética
/*
  1° - Parêntesis
  2° - Potência ou raízes
  3° - Multiplicação, divisão, módulo
  4° - Adição, subtração  
*/
const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation)

// Operadores de incremento e decremento
let postLikes = 10

postLikes++ 
console.log(postLikes)

postLikes--
console.log(postLikes)

// Operadores addition, subtraction, multiplication, division assignment
postLikes += 10
console.log(postLikes)

// NaN - Not a Number
console.log(10 / 'oi')

// Concatenação de string com número
console.log('O post tem ' + postLikes + ' likes.')