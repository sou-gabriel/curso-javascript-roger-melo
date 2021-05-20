class User {
  constructor (name, email) {
    this.name = name
    this.email = email
    this.points = 0
  }

  login () {
    console.log(`${this.name} logou na aplicação`)
    return this
  }

  logout () {
    return `${this.name} deslogou da aplicação`
  }

  addPoint () {
    this.points++
    return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
  }
}

const user = new User('Roger Melo', 'oi@rogermelo.com.br')
const user2 = new User('Paulo Henrique', 'ph@rogermelo.com.br')

user.login().addPoint()

console.log(user) 