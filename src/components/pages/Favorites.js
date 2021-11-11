import '../styles/style.css'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardWrapper } from '../features/card/Card';
import { Button } from '../features/button/Button';
import { getCityWeather } from '../service/service';
export const Favorites = () => {
    const cities = useSelector(state => state.favoriteReducer);
    const [list, setList] = useState([]);
    const mapCards = () => {
        const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities'));
        const updateCities = favoriteCities.forEach(city => {
            getCityWeather(city.Key)
                .then(currentWeather => currentWeather)
                .catch(err => console.log(err))
        });
        return updateCities;
    }
    useEffect(() => {
        setList(mapCards());
    }, [])

    return (
        <div>
            <h1>Hi Favorites</h1>
            <div className="card-container">

                {
                    cities?.map((city, key) => <CardWrapper city={city} key={key} />)
                }
            </div>

        </div>
    )
}
