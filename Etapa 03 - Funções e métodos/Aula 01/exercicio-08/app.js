/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

function multiply (firstNumber = 0, secondNumber = 0) {
  return firstNumber * secondNumber
}

console.log(multiply(10, 5))

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const divide = function (firstNumber = 0, secondNumber = 0) {
  return firstNumber / secondNumber
}

console.log(divide(4, 2))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

const log = function (value = 'É necessário passar um valor como argumento para o parâmetro') {
  console.log(value)
}

// for (let i = 0; i < 7; i++) {
//   let counter = i + 1

//   log(`Esta é a ${counter}ª vez que essa string é exibida.`)
// }

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

const transformToUpperCase = function (array = []) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    const wordInUpperCase = array[i].toUpperCase()

    newArray.push(wordInUpperCase)
  }

  return newArray
}

const millennialWordsInUpperCase = transformToUpperCase(millennialWords)

log(millennialWordsInUpperCase)

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

let positiveNumberCounter = 0 
let negativeNumberCounter = 0

const isPositive = function (number = 0) {
  return number >= 1
}

for (let i = 0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i]
  const isPositiveNumber = isPositive(number)

  if (isPositiveNumber) {
    positiveNumberCounter++
  } else {
    negativeNumberCounter++
  }
}

console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNumberCounter} positivos e ${negativeNumberCounter} negativos.`)

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const getOddNumbers = function (numbers = []) {
  let newArray = []

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const isOddNumber = number % 2 !== 0

    if (isOddNumber) {
      newArray.push(number)
    }
  }

  return newArray
}

const oddNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

console.log(oddNumbers)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

let sentence = ''

for (let i = 0; i < functions.length; i++) {
  const string = `${functions[i]()} `
  
  sentence += string
}

console.log(sentence)