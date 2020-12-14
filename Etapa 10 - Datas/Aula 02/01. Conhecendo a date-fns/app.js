// const present = new Date()

// console.log(dateFns.format(present, 'MMMM'))
// console.log(dateFns.format(present, 'YY'))
// console.log(dateFns.format(present, 'dddd'))
// console.log(dateFns.format(present, 'Do'))
// console.log(dateFns.format(present, 'DD/MM/YY'))

// const past = new Date('December 14 2020 09:00:00')

// console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))

const present = new Date()
const past = new Date('March 7 2001 00:00:00')

// console.log(dateFns.isAfter(present, past))
// console.log(dateFns.parse(present))
console.log('Diferença de milissegundos:', dateFns.differenceInMilliseconds(present, past))
console.log('Diferença de horas:', dateFns.differenceInSeconds(present, past))
console.log('Diferença de dias:', dateFns.differenceInHours(present, past))
console.log('Diferença de anos:', dateFns.differenceInYears(present, past))