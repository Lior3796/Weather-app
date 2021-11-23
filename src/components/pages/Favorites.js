import '../styles/style.css'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FavoriteCard } from '../features/favoriteCard/FavoriteCard';
import { getCityWeather } from '../service/service';
import { Location } from '../features/location/Location';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Favorites = () => {
    const cities = useSelector(state => state.favoriteReducer);
    const [favorites, setFavorites] = useState([{}]);

    const getFavorites = () => {
        let favoriteCities;
        try {
            favoriteCities = JSON.parse(localStorage.getItem('favoriteCities'));
        } catch (e) {
            toast(`cant get favorite cities`)
        }
        try {
            if (!favoriteCities) return; // check if has favorites
            mapFavoritesCities(favoriteCities);

        } catch (e) {
            toast(`cant get favorite cities`)
        }

    }

    const mapFavoritesCities = (favoriteCities) => favoriteCities.forEach(async (city) => {
        const currentWeather = await getCityWeather(city);
        setFavorites([...favorites, currentWeather]);
    });

    useEffect(() => {
        getFavorites();
    }, [])

    return (
        <div className="favorite-container">
            <div className="card-container">
                {
                    cities?.map((city, key) => <FavoriteCard currentWeather={favorites} city={city} key={key} />)
                }
            </div>
            {/* <Location
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            /> */}
            <ToastContainer />
        </div>
    )
}
