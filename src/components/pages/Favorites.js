import React, { useEffect, useState, useMemo } from 'react';
import '../styles/style.css'
import { useSelector } from 'react-redux';
import { FavoriteCard } from '../features/favoriteCard/FavoriteCard';
import { getCityWeather } from '../service/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../features/footer/Footer";


export const Favorites = () => {
    const cities = useSelector(state => state.favoriteReducer);
    const [favorites, setFavorites] = useState([{}]);

    useEffect(() => {
        GetFavorites();
    }, [])

    const CheckMemoFavorites = () => {
        useMemo(() => { mapFavoritesCities(cities) }, [cities.length]);
    }
    const GetFavorites = () => {
        try {
            if (!cities.length) return;
            CheckMemoFavorites();

        } catch (e) {
            console.log("error")
        }

    }


    const mapFavoritesCities = (favoriteCities) => favoriteCities.forEach(async (city) => {
        try {
            const currentWeather = await getCityWeather(city);
            setFavorites([...favorites, currentWeather]);
        } catch (e) {
            toast('Cant get favorite cities')
        }
    });


    return (
        <div className="favorite-container">
            <h1 className="header">Here is your favorite weather:</h1>

            <div className="forecasts-map-container-favorite">
                {
                    cities?.map((city, key) => <FavoriteCard currentWeather={favorites} city={city} key={key} />)
                }
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}
