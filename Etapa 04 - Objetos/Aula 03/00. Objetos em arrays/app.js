let user = {
  name: 'João',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: [
    { title: 'Empadão de frango', likes: 30 },
    { title: '4 receitas de purê de batata', likes: 50 }
  ],
  login () {
    console.log('O usuário está logado')
  },
  logout () {
    console.log('O usuário está deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes)
    })
  }
}

user.logBlogPosts()