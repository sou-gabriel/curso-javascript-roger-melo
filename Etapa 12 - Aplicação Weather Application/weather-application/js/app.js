const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document
  .querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showLocalStorageCity = () => {
  const cityName = localStorage.getItem('city')

  if (cityName) {
    showCityWeatherInfo(cityName)
  }
}

const showCityCard = () => {
  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
}

const showCityWeatherInfo = async cityName => {
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await 
    getCityWeather(Key)
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg">`

  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  showCityCard()
}

cityForm.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.city.value  

  showCityWeatherInfo(inputValue)
  localStorage.setItem('city', cityName)

  event.target.reset()
})

showLocalStorageCity()