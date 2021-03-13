// a palavra-chave this
let user = {
  name: 'João',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
  login () {
    console.log('Usuário logado')
  },
  logout () {
    console.log('Usuário deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}

user.logBlogPosts()