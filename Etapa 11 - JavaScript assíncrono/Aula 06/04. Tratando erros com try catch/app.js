try {
  console.log(oi)
} catch (error) {
  if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
    const oi = 'const oi criada'
    console.log(oi)
  }
}
console.log('oi')