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
            } else {
                setFavorite('');
            }
        }
    }
    useEffect(() => getFavoriteCities(), [favoriteCity]);

    return (
        <div className="text-container">
            <h1 className="header">{favoriteCity.LocalizedName}</h1>
            {favorite && <h4 className="header">{favorite}</h4>}
        </div>
    )
}
