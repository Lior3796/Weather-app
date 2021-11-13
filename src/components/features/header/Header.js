import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { DELETE_FAVORITE } from '../../../redux/actions/types'
import { useDispatch, useSelector } from 'react-redux';
export const Header = ({ favoriteCity }) => {
    const [favorite, setFavorite] = useState('');
    useEffect(() => {
        let favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
        if (favoriteCities) {
            favoriteCities = favoriteCities.filter((city) => city.Key === favoriteCity.Key);
            if (favoriteCities.length !== 0) {
                setFavorite('Favorite city');
            } else {
                setFavorite('');
            }
        }
        console.log(favoriteCities, "Header componentes");
    }, [favoriteCity])
    return (
        <div className="text-container">
            <h1 className="header">{favoriteCity.LocalizedName}</h1>
            {favorite ? <h3>favorite</h3> : <></>}
        </div>
    )
}
