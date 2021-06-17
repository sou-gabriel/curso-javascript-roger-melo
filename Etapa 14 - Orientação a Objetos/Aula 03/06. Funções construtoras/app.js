// class Student {
//   constructor (name, email) {
//     this.name = name
//     this.email = email
//   }
// }

function Student (name, email) {
  this.name = name
  this.email = email

  this.login = function () {
    return `${this.name} fez login`
  }
}

const gabrielFialho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')

console.log(gabrielFialho, brenoLemos)