const APIKey = 'gmuAnDScJz7e8t7lvU79tnhzNARru90Q'
const baseUrl = 'https://dataservice.accuweather.com/'

const getCityUrl = cityName =>
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = cityKey => 
  `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-BR`

const fetchData = async (url) => {
  try {    
    const response = await fetch(url)
  
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }
  
    return await response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => {
  const cityUrl = getCityUrl(cityName)
  return fetchData(cityUrl)
}

const getCityWeather = cityKey => {
  const weatherUrl = getWeatherUrl(cityKey) 
  return fetchData(weatherUrl)
}