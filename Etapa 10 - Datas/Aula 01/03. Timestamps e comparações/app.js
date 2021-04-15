const past = new Date('May 1 2020 7:47:00')
const present = new Date()

const difference = present.getTime() - past.getTime()
console.log(difference)

const seconds = Math.round(difference / 1000)
console.log({ seconds })

const minutes = Math.round(seconds / 60)
console.log({ minutes })

const hours = Math.round(minutes / 60)
console.log({ hours })

const days = Math.round(hours / 24)
console.log({ days })

console.log(`Escrito há ${days} dias`)

const timestamp = 1675938474990 
console.log(new Date(timestamp))