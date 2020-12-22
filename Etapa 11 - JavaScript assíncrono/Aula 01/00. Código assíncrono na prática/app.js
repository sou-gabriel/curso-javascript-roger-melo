console.log('Linha 1')
console.log('Linha 2')

// simulando um código assíncrono
setTimeout(() => {
  console.log('Função de callback executada')
}, 2000)

console.log('Linha 3')
console.log('Linha 4')
/* 
  - A função de callback do setTimeout será processada em outra parte do browser.
  E depois de 2 segundos e após todas as outras instruções forem executadas, então
  essa função de callback será executada.
*/