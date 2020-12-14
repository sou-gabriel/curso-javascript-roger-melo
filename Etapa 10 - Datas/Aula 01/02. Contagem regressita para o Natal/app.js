const countContainer = document.querySelector('.count-container')

const present = new Date()
const future = new Date('Dec 25 2020 00:00:00')

const countHTML = `
  <span>${String(dateFns.distanceInWords(future, present)).replace('days', 'dias')}</span>
`

countContainer.innerHTML = countHTML