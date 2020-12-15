const clockContainer = document.querySelector('.clock-container')

const getClockHTML = (hours, minutes, seconds) => {
  return `
    <span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>
  `
}

const showClock = () => {
  const present = new Date()

  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds() 

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds) 
}

setInterval(showClock, 1000)