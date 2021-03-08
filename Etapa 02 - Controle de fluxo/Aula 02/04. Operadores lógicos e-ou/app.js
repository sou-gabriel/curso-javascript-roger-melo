// operadores lógicos - "OU" || e "E" &&
const password = 'oi1dr'

if (password.length >= 12 && password.includes('1')) {
  console.log('senha muito forte')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
  console.log('senha forte')
} else {
  console.log('a senha deve conter 8 ou mais caracteres')
}