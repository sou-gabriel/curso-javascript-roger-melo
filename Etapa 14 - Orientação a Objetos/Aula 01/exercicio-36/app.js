/*
  01 
  
  - Atualmente, a invocação da função abaixo está retornando 
    "50,100,50undefinedundefined";
  - Descubra o que o código abaixo está fazendo e faça a invocação da função 
    retornar 200;
  - Não use a sintaxe item[index].
*/

const numbers = [50, 100, 50]

const sum = (x, y, z) => x + y + z

console.log(sum(...numbers))

/*
  02

  - Declare uma const que armazena seu primeiro nome com todas as letras 
    minúsculas;
  - Utilizando (também) o spread operator, exiba no console o seu nome com 
    apenas a primeira letra maiúscula.
*/

const name = 'gabriel'
const capitalizeName = [name[0].toUpperCase(), ...name.slice(1)].join('')

console.log(capitalizeName)

/*
  03

  - No objeto abaixo, verifique se o valor da const randomNumber é maior que 50;
    - Se for, o objeto deve receber uma propriedade c, que armazena 3;
    - Se não for, o objeto deve receber uma propriedade d, que armazena 4;
  - Não utilize as estruturas condicionais if ou switch.
*/

// const randomNumber = Math.round(Math.random() * 100)

// const obj = {
//   a: 1,
//   b: 2,
//   ...(randomNumber > 50 ? { c: 3 } : { d: 4 })
// }

// console.log(obj)

/*
  04

  - Descubra o que o código abaixo está fazendo e refatore-o para que o objeto 
    criado permaneça intacto.
*/

const third = obj => ({ ...obj, d: 3 })

const second = obj => third(obj)

const first = obj => second(obj)

const object = { k: 't' }
const object2 = first(object)

console.log(object, object2)

/*
  05

  - A partir do código abaixo, crie um objeto em que as propriedades são os 
    valores das propriedades 'date' e os valores das propriedades são os 
    valores de 'value'.

  O objeto criado deve ser assim:

  {
    '3242348-9842340234': 6,
    '99e89-499958': 31,
    '8596646656666r488': 17
  }
*/

const timestamps = [
  {
    date: '3242348-9842340234',
    value: 6
  },
  {
    date: '99e89-499958',
    value: 31
  },
  {
    date: '8596646656666r488',
    value: 17
  }
]

const values = timestamps.reduce((acc, { date, value }) => {
  acc[date] = value
  return acc
}, {})

console.log(values)

/*
  06

  - Já implementamos os métodos some, map e filter, do zero;
  - Neste exercício, seu desafio será criar, do zero, o método forEach;
  - Implemente uma função "forEach" que possui a mesma funcionalidade do método 
    forEach original;
  - Você não poderá utilizar o método forEach original, embutido na linguagem;
  - A invocação da função "forEach" deve receber um array como 1º argumento e a 
    declaração de uma função como 2º argumento;
  - Faça os testes usando a let e const abaixo;
    - Após a execução do forEach, accumulator deve armazenar 236;
    - A cada execução do forEach, a mensagem '"X" é o Xº item do array 
      [XX, XX, XX, XX]' deve ser exibida no console. Os "X" são placeholders 
      que devem ser preenchidos com as informações corretas.
  
  Dica 1: o método forEach é usado para executar efeitos colaterais;
  Dica 2: o método forEach nunca retorna um valor.
*/

let accumulator = 0
const oddNumbers = [51, 97, 65, 23]

const forEach = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index]
    func(item, index, arr)
  }
}

const sumArrayItems = item => {
  accumulator += item
}

const logMessage = (item, index, array) => {
  const position = index + 1
  const arrayAsString = array.join(', ')

  console.log(`"${item}" é o ${position}º item do array [${arrayAsString}]`)
}

forEach(oddNumbers, sumArrayItems)
forEach(oddNumbers, logMessage)
console.log(accumulator)

/*
  07

  - Implemente um carousel. O desafio é que o resultado final seja este: 
    https://youtu.be/ydn_bSwvlPU
  - As imagens, marcação HTML e estilos CSS estão feitos. Aqui no app.js você 
    fará os passos abaixo;
  - Quando o botão de "próximo slide" for clicado:
    1 Remova, de todos os slides, as classes que os deixam visíveis;
    2 Adicione, em todos os slides, as classes que os deixam invisíveis;
    3 Adicione, apenas no slide que deve ser exibido, a classe que deixa um 
      slide visível;
      3.1 Para saber qual slide deve ficar visível, quando o arquivo .js for 
        carregado, inicialize uma variável com 0. Ela representa o index do 
        slide exibido atualmente;
      3.2 Antes de adicionar e remover as classes dos slides, verifique o index 
        do slide exibido atualmente;
          3.3 Se ele corresponder ao index do último slide (3º), o 1º slide deve 
            ser exibido;
          3.4 Se ele não corresponder ao index do último slide, o próximo slide 
            deve ser exibido.
  - Quando o botão de "slide anterior" for clicado:
    1 Execute os passos 1, 2 e 3 acima;
    2 No passo 3.3, se o slide exibido atualmente corresponder ao index do 1º 
      slide, o último slide (3º) deve ser exibido;
    3 No passo 3.4, se o slide exibido atualmente não corresponder ao index do 
      1º slide, o slide anterior deve ser exibido.
*/

const slides = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

const lastSlideIndex = slides.length - 1
let currentSlideIndex = 0

const manipulateSlidesClasses = correctSlideIndex => {
  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
  })

  slides[correctSlideIndex].classList.add('carousel__item--visible')
}

const isLastSlide = currentSlideIndex === lastSlideIndex
const showNextSlide = () => {
  const correctSlideIndex =  isLastSlide 
    ? currentSlideIndex = 0 
    : ++currentSlideIndex

  manipulateSlidesClasses(correctSlideIndex)
}

const showPreviousSlide = () => {
  const isFirstSlide = currentSlideIndex === 0 
  const correctSlideIndex = isFirstSlide
    ? currentSlideIndex = lastIndex 
    : --currentSlideIndex

  manipulateSlidesClasses(correctSlideIndex)
}

nextButton.addEventListener('click', showNextSlide)
prevButton.addEventListener('click', showPreviousSlide)