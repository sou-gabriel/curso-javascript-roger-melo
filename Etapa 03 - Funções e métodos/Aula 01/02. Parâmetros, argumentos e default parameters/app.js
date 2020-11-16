const myFunc = function (name = 'Estrôncio', lastName = 'Almeida') {
  console.log(`Oi, ${name} ${lastName}`)
}

myFunc()
myFunc('Gabriel')
myFunc('Gabriel', 'Ramos')