const present = new Date()
const future = new Date('Dec 25 2020 00:00:00')

// console.log(present.getTime(), future.getTime())

const milliseconds = future.getTime() - present.getTime()

const seconds = Math.round(milliseconds / 1000)
const minutes = Math.round(seconds / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours / 24)

console.log(`Faltam ${days} para o natal para o natal =)`)