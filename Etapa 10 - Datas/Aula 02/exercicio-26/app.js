/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const present = new Date('March 7 2020')

const addZero = value => String(value).length === 1 ? `0${value}` : value

const formatDate = date => {
  const dayOfMonth = addZero(date.getDate())
  const month = addZero(date.getMonth() + 1)
  const year = date.getFullYear()

  return `${dayOfMonth}/${month}/${year}`
}

console.log(formatDate(present))

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const formatDateAndTime = date => {
  const hours = addZero(date.getHours())
  const minutes = addZero(date.getHours())
  const dayOfWeek = date.getDay()
  const dayOfMonth = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  const daysOfWeek = [
    'domingo',
    'segunda', 
    'terça', 
    'quarta', 
    'quinta', 
    'sexta'
  ]

  const months = [
    'janeiro', 
    'fevereiro', 
    'março', 
    'abril', 
    'maio', 
    'junho', 
    'julho', 
    'agosto', 
    'setembro', 
    'outubro', 
    'novembro', 
    'dezembro'
  ]

  return `${hours}:${minutes} - ${daysOfWeek[dayOfWeek]}, ${dayOfMonth} de ${months[month]} de ${year}`
}

console.log(formatDateAndTime(new Date('December 14 2020 08:05:00')))

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const { id, isVerified } = user

console.log(id, isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA
const { name: nameB } = robotB

console.log(nameA, nameB)

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const alphabetical = { a, b, c }
console.log(alphabetical)

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => console.log(value)

const updateSomething = ({ target, property, willChange }) => {
  willChange = willChange === 'valor indesejado' ? 'valor desejado' : willChange

  useDataSomewhereElse({ target, property, willChange })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const getClock = () => {
  const present = new Date()

  return { 
    hours: present.getHours(), 
    minutes: present.getMinutes(), 
    seconds: present.getSeconds() 
  }
}

const showClock = () => {
  const { hours, minutes, seconds } = getClock()

  const clockHTML = `
    <span>${addZero(hours)}</span> :
    <span>${addZero(minutes)}</span> :
    <span>${addZero(seconds)}</span>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(showClock, 1000)