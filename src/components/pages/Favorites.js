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
        console.log(favoriteCities, "list of favorite cities");
        if (favoriteCities) {
            favoriteCities.forEach((city) => {
                return getCityWeather(city)
                    .then(currentWeather => setFavorites(currentWeather))
                    .catch(() => toast("can't show favorites cities"))
            });
        }

    }
    useEffect(() => {
        mapCards();
    }, [])

    return (
        <div>
            <Header favoriteCity={{ LocalizedName: 'Favorite cities' }} />
            {
                favorites?.map((city, key) => <CardWrapper city={city} key={key} />)
            }

            <ToastContainer />
        </div>
    )
}
