const formChangeLocation = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const timeContainer = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

formChangeLocation.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value.trim()

  // Inserir informações climáticas no DOM
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await 
    getCityWeather(Key)

  // Adiciona imagem do clima
  if (IsDayTime) {
    timeContainer.setAttribute('src', './src/day.svg')
  } else {
    timeContainer.setAttribute('src', './src/night.svg')  }

  // Insere informações climáticas no DOM
  timeIconContainer.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg">`
  cityName.textContent = LocalizedName
  cityWeather.textContent = WeatherText
  cityTemperature.textContent = Temperature.Metric.Value
})