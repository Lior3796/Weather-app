import React, { useEffect, useState } from 'react';
import '../../styles/style.css';

export const Header = ({ favoriteCity }) => {

    const [favorite, setFavorite] = useState('');
    const getFavoriteCities = () => {
        let favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
        if (favoriteCities) {
            favoriteCities = favoriteCities.filter((city) => city.Key === favoriteCity.Key);
            if (favoriteCities.length !== 0) {
                setFavorite('Favorite city');
            }
        }
    }
    useEffect(() => getFavoriteCities(), [favoriteCity]);

    return (
        <div className="text-container">
            <h1 className="header">{favoriteCity.LocalizedName || "Favorite cities"}</h1>
        </div>
    )
}
