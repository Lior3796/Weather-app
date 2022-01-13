
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

export const getEvents = () => {
    return fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=7&keyword=Ed&apikey=9Fe3TiZMSanrQ1TnmPuhrc7bW0q6if13")
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getEventByAttraction = (keyword) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=9Fe3TiZMSanrQ1TnmPuhrc7bW0q6if13&keyword=${keyword}&locale=*&size=6&preferredCountry=us`)
        .then(attraction => attraction.json())
        .catch(err => console.log(err))
}

export const getUserEvent = (keyword) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=9Fe3TiZMSanrQ1TnmPuhrc7bW0q6if13&keyword=${keyword}&locale=*&size=6&preferredCountry=us`)
        .then(attraction => attraction.json())
        .catch(err => console.log(err))
}




