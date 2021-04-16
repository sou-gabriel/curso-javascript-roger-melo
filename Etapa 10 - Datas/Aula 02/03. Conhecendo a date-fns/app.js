console.log(dateFns)

const present = new Date()
const past = new Date('January 1 2021 17:36:10')

console.log(dateFns.format(present, 'MMM'))
console.log(dateFns.format(present, 'DD'))
console.log(dateFns.format(present, 'YYYY'))
console.log(dateFns.format(present, 'DDD'))
console.log(dateFns.format(present, 'do'))

console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))