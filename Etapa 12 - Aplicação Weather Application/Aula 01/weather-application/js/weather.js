const APIKey = 'Kmw4PzvlJ1fAVXibrTxE3uN8IlXtgYxL'
const getCityUrl = cityName =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

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

const getCityData = async cityName => {
  const cityUrl = getCityUrl(cityName)
  const [cityData] = await fetchData(cityUrl)
  return cityData
}

const getCityWeather = async cityName => {
  const { Key } = await getCityData(cityName)
  const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-BR`
  const [cityWeather] = await fetchData(cityWeatherUrl)
  return cityWeather
}

getCityWeather('São Paulo')