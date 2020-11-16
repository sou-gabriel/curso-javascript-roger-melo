// Function declaration
function sayHi () {
  console.log('Oi')
}

sayHi()

// Function expression 
const showFood = function () {
  console.log('Pizza')
}

showFood()

/*
  Hoisting significa elevar. Quando uma function declaration é invocada antes de ser declarada, o JavaScript eleva a declaração dessa função pro topo do arquivo, isso ocorre por de baixo dos panos.
*/