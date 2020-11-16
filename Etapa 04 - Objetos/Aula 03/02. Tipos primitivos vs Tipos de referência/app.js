// valores primitivos
console.log('tipos primitivos:')

let scoreOne = 100
let scoreTwo = scoreOne // Um novo identificado é criado na STACK. scoreTwo é independente da scoreOne, porém armazena o mesmo valor.

console.log(`${scoreOne} | ${scoreTwo}`)

scoreOne = 150

console.log(`${scoreOne} | ${scoreTwo}`)

console.log('---')

console.log('tipos de referência:')

let userOne = { name: 'Gabriel', age: 19 } // Estou criando um identificador que armazena um ponteiro que aponta para o meu objeto que está localizado no HEAP

let userTwo = userOne // Estou criando um novo ponteiro armazenado na STACK, que aponta para o mesmo objeto.

console.log(userOne, userTwo)

userOne.name = 'Roger Melo' // Como são ponteiros que apontam para o mesmo objeto e nesta linha eu estou modificando o valor da propriedade "name" todos os ponteiros que apontam para este mesmo objeto terão sua propriedade name alterada. TODOS!

console.log(userOne, userTwo)