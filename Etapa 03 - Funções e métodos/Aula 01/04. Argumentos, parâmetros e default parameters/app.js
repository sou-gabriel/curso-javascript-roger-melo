// Argumentos, parâmetros e default parameters
const myFunc = function (name = 'Estrôncio', lastName = 'Almeida') {
  console.log(`Oi, ${name} ${lastName}!`)
}

myFunc()
myFunc('Roger')