const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// Usando concatenção
// const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários.'
// console.log(postMessage)

// console.log('Você manja do filme \'As Branquelas\'?')

// Usando Template Strings
const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`
console.log(postMessage)

// Criando Template HTML
const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários.</span>
`

console.log(html)