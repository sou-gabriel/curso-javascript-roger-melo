try {
  console.log(oi)
} catch (error) {
  if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
    const oi = 'oi foi cirada'
    console.log(oi)
  }
}

console.log('oi')