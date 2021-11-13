
export const getCityList = (city) => {
    return fetch(`http://dataservice.accuweather.com//locations/v1/cities/autocomplete?apikey=4jiV4kQw8qp9aKj7rTVgSPBcJJSGQ5zJ&q=${city}&language=en-us HTTP/1.1`)
        .then(res => res.json())

}

export const getCityWeather = ({ Key }) => {
    return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=4jiV4kQw8qp9aKj7rTVgSPBcJJSGQ5zJ&language=en-us&details=true`)
        .then(res => res.json())

}

export const getDailyForecasts = (Key) => {
    return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=4jiV4kQw8qp9aKj7rTVgSPBcJJSGQ5zJ`)
        .then(res => res.json())


}





