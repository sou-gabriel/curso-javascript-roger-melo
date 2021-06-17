function Student (name, email) {
  this.name = name
  this.email = email
}

Student.prototype.login = function login () {
  return `${this.name} fez login`
}

Student.prototype.comment = function () {
  return `${this.name} comentou`
} 

function TeacherAssistant (name, email, scheduleWeekPosts) {
  Student.call(this, name, email)
  this.scheduleWeekPosts = scheduleWeekPosts
} 

TeacherAssistant.prototype = Object.create(Student.prototype) 

TeacherAssistant.prototype.giveBadge = function giveBadge ({ name }) {
  return `${this.name} deu uma medalha para ${name}`
}

// const gabrielFialho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')

const arthurSouza = 
  new TeacherAssistant('Arthur Souza', 'arthursouza@rogermelo.com.br', false)

console.log(arthurSouza.giveBadge(brenoLemos))
console.log(arthurSouza.login())
console.log(arthurSouza.login === brenoLemos.login)