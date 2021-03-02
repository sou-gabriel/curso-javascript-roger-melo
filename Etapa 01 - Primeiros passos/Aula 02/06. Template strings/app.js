const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
// const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários.'

// console.log('Você manja do filme \'As Branquelas\'')
// Põem aspas simples em uma string com abertura e fechamento de aspas simples
// Põem aspas duplas em uma string com abertura e fechamento de aspas simples
// Escapa as aspas para o JavaScript interpretá-la como um caractere da string e não como fechamento da mesma

// Utiliza template strings
// const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`

// criando templates HTML
const html = `
  <h2>${postTitle}</h2>
  <p>${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`

console.log(html)