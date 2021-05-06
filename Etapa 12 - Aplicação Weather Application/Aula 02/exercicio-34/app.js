/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

// const getReverseString = string => {
//   return string.split('').reverse().join('')
// }

const getReverseString = string => {
  return string.split('').reduce((acc, item) => `${item}${acc}`, '')
}

console.log(getReverseString('123'))
console.log(getReverseString('abc'))

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
const foundNumber = numbers.includes(15)
// let foundNumber = false

// numbers.forEach(number => {
//   if (number === 15) {
//     foundNumber = true
//   }
// })

console.log(foundNumber)

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/
