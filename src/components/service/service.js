
export const getCityList = (city) => {
    return fetch(`https://dataservice.accuweather.com//locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_SECONDE_KEY}&q=${city}&language=en-us HTTP/1.1`)
        .then(res => res.json())
}

export const getCityWeather = ({ Key }) => {
    return fetch(`https://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${process.env.REACT_APP_SECONDE_KEY}&language=en-us&details=true`)
        .then(res => res.json())

}

export const getDailyForecasts = (Key) => {
    return fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${process.env.REACT_APP_SECONDE_KEY}`)
        .then(res => res.json())
}

export const getCoordinates = (Key) => {
    return fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${process.env.REACT_APP_SECONDE_KEY}`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))


}




