// escopo de função
// function myFunc () {
//   let cat = 'Zeca'
//   const age = 3
//   var color = 'cinza'
//   console.log(age)
// }

// function myFunc2 () {
//   var color = 'branco'
//   const age = 5
//   console.log(age)
// }

// myFunc()
// myFunc2()

// let dog = 'Pastor-alemão'

// function dogWatch () {
//   let dog = 'Samoieda'
//   console.log(dog)
// }

// dogWatch()
// console.log(dog)

// escopo de bloco
// if (true) {
//   const dragon = 'Balerion'
//   console.log(dragon)
// }

// console.log(dragon)

// if (true) {
//   var dragon = 'Balerion'
//   console.log(dragon)
// }

// console.log(dragon)

// escopo léxico
const external = () => {
  const book = 'Sapiens'

  const internal = () => {
    console.log(book.toUpperCase())
  }

  internal()
}

external()