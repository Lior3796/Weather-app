
export const getCityList = (city) => {
    return fetch(`http://dataservice.accuweather.com//locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${city}&language=en-us HTTP/1.1`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getCityWeather = ({ Key }) => {
    return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${process.env.REACT_APP_API_KEY}&language=en-us&details=true`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getDailyForecasts = (Key) => {
    return fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .catch(err => console.log(err))

}





