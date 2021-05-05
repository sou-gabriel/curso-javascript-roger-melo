const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document
  .querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value

  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature }] = await 
    getCityWeather(Key)

  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }

  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  cityForm.reset()
})