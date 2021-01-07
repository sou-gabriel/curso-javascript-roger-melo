const APIKey = 'SmJFjAduSpbFIvHDym8l7gZ1ShRyhRxP'

const getCityData = async city => {
  try {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${city}&language=pt-br`)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da cidade.')
    }

    return response.json()
    
  } catch (error) {
    console.log(error)
  }
}

const getCityWeather = async cityKey => {
  try {
    const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-BR`)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados climáticos da cidade.')
    }

    return response.json()
  } catch (error) {
    console.log(error)
  }
}