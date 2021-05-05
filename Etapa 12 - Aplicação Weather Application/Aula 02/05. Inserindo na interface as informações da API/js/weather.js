const APIKey = 'gmuAnDScJz7e8t7lvU79tnhzNARru90Q'
const URLBase = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName => 
  `${URLBase}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = cityKey => 
  `${URLBase}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchCityInfo = async (url) => {
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => {
  const cityUrl = getCityUrl(cityName)
  return fetchCityInfo(cityUrl) 
}

const getCityWeather = cityKey => {
  const cityWeatherUrl = getWeatherUrl(cityKey)
  return fetchCityInfo(cityWeatherUrl)
}