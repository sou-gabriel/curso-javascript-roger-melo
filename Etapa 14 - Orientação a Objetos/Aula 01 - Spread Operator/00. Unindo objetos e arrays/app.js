const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [ 0, ...arr1, 3.5 ,...arr2, 7 ]
// console.log(arr3)

const obj1 = { prop1: 1, prop2: 2 }
const obj2 = { prop3: 3, prop4: 4 }
const obj3 = Object.assign(obj1, obj2) // Essa é uma forma antiga de unir objetos
// const obj3 = { ...obj1, ...obj2 } // É uma forma mais moderna para unir objetos
console.log(obj3)