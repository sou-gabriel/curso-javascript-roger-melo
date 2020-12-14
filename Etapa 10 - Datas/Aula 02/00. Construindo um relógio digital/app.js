const clockContainer = document.querySelector('.clock-container')

const getClock = () => {
  const present = new Date()

  return { 
    hours: present.getHours(), 
    minutes: present.getMinutes(), 
    seconds: present.getSeconds() 
  }
}

const addZero = value => String(value).length === 1 ? `0${value}` : value

const showClock = () => {
  const { hours, minutes, seconds } = getClock()

  const clockHTML = `
    <span>${addZero(hours)}</span> :
    <span>${addZero(minutes)}</span> :
    <span>${addZero(seconds)}</span>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(showClock, 1000)