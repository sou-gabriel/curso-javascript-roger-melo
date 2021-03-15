// objetos em arrays
let user = {
  name: 'João',
  age: 31,
  email: 'joaocarodoso@gmail.com',
  city: 'São Paulo',
  blogPosts: [
    { title: 'Empadão de frango', likes: 30 },
    { title: '4 receitas de purê de batata', likes: 50 }
  ],
  login () {
    console.log('Usuário logado')
  },
  logout () {
    console.log('Usuário deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes)
    })
  }
}

user.logBlogPosts()