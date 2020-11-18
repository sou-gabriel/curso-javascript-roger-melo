const link = document.querySelector('a')

// console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://github.com/')

link.innerText = 'GitHub'

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'sucess')

paragraph.getAttribute('style', 'color: green;')