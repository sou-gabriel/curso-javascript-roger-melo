class User {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
}

const user = new User('Gabriel', 'dev.gabrielramos@gmail.com')
const user2 = new User('Roger', 'oi@rogermelo.com.br')
console.log(user, user2)