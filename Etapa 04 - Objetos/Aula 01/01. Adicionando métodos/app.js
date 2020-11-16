let user = {
  name: 'John',
  age: 19,
  email: 'john@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
  login: function () {
    console.log('Usuário logado')
  },
  logout: function () {
    console.log('Usuário deslogado')
  }
}

user.login() 

user.logout()

/*
  - Métodos são funções, mas que são declaradas dentro de um objeto, e para invoca-lo utiliza-se notação de ponto.
*/
