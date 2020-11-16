// Exemplo chave para callbacks
const myFunc = callback => {
  const value = 77

  callback(value)
}

myFunc(number => {
  console.log(number)
})

/*
  - Callback é uma função passada como argumento da invocação de outra função.
*/

// O método forEach
const socialNetworks = ['Youtube', 'Twitter', 'Instagram', 'Facebook']

socialNetworks.forEach((socialNetwork, index, array) => {
  console.log(index, socialNetwork, array)
})