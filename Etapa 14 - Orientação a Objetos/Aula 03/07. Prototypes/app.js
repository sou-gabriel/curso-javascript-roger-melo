// class Student {
//   constructor (name, email) {
//     this.name = name
//     this.email = email
//   }

//   comment () {
//     return `${this.name} comentou`
//   }

//   static formatToDatabase (aString) {
//     return aString
//       .toUpperCase()
//       .replaceAll(' ', '_')
//   }
// }

function Student (name, email) {
  this.name = name
  this.email = email
}

Student.prototype.login = function login () {
  return `${this.name} fez login`
}

Student.prototype.comment = function comment () {
  return `${this.name} comentou`
}

Student.formatToDatabase = function (aString) {
  return aString
    .toUpperCase()
    .replaceAll(' ', '_')
}

const gabrielFialho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')

console.log(gabrielFialho.comment(), brenoLemos.comment())
console.log(gabrielFialho.comment === brenoLemos.comment)
console.log(gabrielFialho, brenoLemos)
console.log(Student.formatToDatabase('string para o banco de dados'))
console.log(Student.formatToDatabase.name)
console.dir(Student.formatToDatabase)
console.log(Student.prototype.comment.name)
console.log(Student.prototype.login.name)