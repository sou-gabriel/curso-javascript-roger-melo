/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

const getUsers = url => {
  return new Promise((resolved, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4
      if (isRequestOk) {
        const data = JSON.parse(request.responseText)
        resolved(data)
      }

      if (isRequestNotOk) {
        reject('Não foi possível obter os dados dos usuários.')
      }
    })

    request.open('GET', url)
    request.send()
  })
}

getUsers('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log(users))
  .catch(error => console.log(error))

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const calculator = operator => {
  return (firstNumber, secondNumber) => {
    const operations = {
      '+': firstNumber + secondNumber,
      '-': firstNumber - secondNumber,
      '*': firstNumber * secondNumber,
      '/': firstNumber / secondNumber,
      '%': firstNumber % secondNumber
    }

    const operationResult = operations[operator]

    return operationResult
      ? `Resultado da operação: ${firstNumber} ${operator} ${secondNumber} = ${operationResult}.`
      : 'Operação inválida.'
  }
}

const showResult = calculator('+')
console.log(showResult(10, 5))

/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const sul = [
  'Paraná',    
  'Santa Catarina', 
  'Rio Grande do Sul'
]

const sudeste = [  
  'São Paulo', 
  'Minas Gerais', 
  'Espírito Santo', 
  'Rio de Janeiro'
]

const brasil = sul.concat(sudeste)

brasil.unshift('Bahia', 'Pernambuco', 'Ceará', 'Maranhão')
console.log(brasil.shift())

const newSul = brasil.filter(state => sul.includes(state))
console.log(newSul)

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/

const nordeste = [
  'Alagoas', 
  'Bahia', 
  'Ceará', 'Maranhão', 
  'Paraíba', 
  'Pernambuco', 
  'Piauí', 
  'Rio Grande do Norte', 
  'Sergipe'
]

const newSudeste = brasil.splice(6, 4) 

nordeste.forEach(state => brasil.unshift(state))

const newBrasil = brasil.map((state, index) => {
  return { id: index, estado: state }
})

const statesHaveMoreThanSevenLetters = brasil.every(state => state.length > 7)

statesHaveMoreThanSevenLetters 
  ? console.log('Sim, todos os estados tem mais de 7 letras.')
  : console.log('Nem todos os estados tem mais de 7 letras.')

/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/

const isCearaIncluded = brasil.includes('Ceará')

isCearaIncluded 
  ? console.log('Ceará está incluído.')
  : console.log('Ceará não foi incluído =/')

const newNewBrasil = newBrasil.map(({ id, estado }) => {
  return { id: ++id, estado: `${estado} pertence ao Brasil.` }
})

const statesEven = newNewBrasil.filter(state => {
  return state.id % 2 === 0
})

debugger