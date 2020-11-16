let age = 19

if (true) {
  // let age = 29
  console.log(`A idade é: ${age}`)

  if (true) {
    // let age = 39
    console.log(`A idade é: ${age}`) // Referencia o valor da age declarada mais próxima.
  }
}

console.log(`A idade é: ${age}`)