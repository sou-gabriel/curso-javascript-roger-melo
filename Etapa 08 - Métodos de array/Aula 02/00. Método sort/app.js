// exemplo 1: ordenando strings
const names = ['Christian', 'Alfredo', 'Edson']

names.sort()

console.log(names)

// exemplo 2: ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort((score1, score2) => score1 - score2)
debugger

// exemplo 3: Ordenando objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//   if (item1.score > item2.score) {
//     return -1
//   } else if (item2.score > item1.score) {
//     return 1
//   }

//   return 0
// })

// console.log(theBigFamily)
theBigFamily.sort((item1, item2) => item2.score - item1.score)

theBigFamily