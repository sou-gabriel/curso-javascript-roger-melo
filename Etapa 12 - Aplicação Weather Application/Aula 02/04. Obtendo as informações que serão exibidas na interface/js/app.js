const cityForm = document.querySelector('[data-js="change-location"]')

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value

  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature }] = await getCityWeather(Key)

  console.log(WeatherText, Temperature)
  cityForm.reset()
})