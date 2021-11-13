import '../styles/style.css'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardWrapper } from '../features/card/Card';
import { getCityWeather } from '../service/service';
import { Header } from '../features/header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Favorites = () => {
    const cities = useSelector(state => state.favoriteReducer);
    const [favorites, setFavorites] = useState([]);
    const mapCards = () => {
        const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities'));
        const updateCities = favoriteCities.forEach(city => {
            getCityWeather(city.Key)
                .then(currentWeather => currentWeather)
                .catch(() => toast("can't show favorites cities"))
        });
        return updateCities;
    }
    useEffect(() => {
        setFavorites(mapCards());
    }, [])

    return (
        <div>
            <Header favoriteCity={{ LocalizedName: 'Favorite cities' }} />
            <div className="card-container">
                {
                    cities?.map((city, key) => <CardWrapper city={city} key={key} />)
                }
            </div>
            <ToastContainer />
        </div>
    )
}
