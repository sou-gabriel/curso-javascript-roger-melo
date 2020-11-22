const article = document.querySelector('article')

// Array.from(article.children).forEach(element => {
//   element.classList.add('article-element')
// })

const title = document.querySelector('h2')

// console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling, title.previousElementSibling)