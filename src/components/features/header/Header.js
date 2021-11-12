import React, { useEffect } from 'react';
import '../../styles/style.css';
import { DELETE_FAVORITE } from '../../../redux/actions/types'
import { useDispatch, useSelector } from 'react-redux';
export const Header = ({ favoriteCity }) => {
    console.log(favoriteCity.isFavorite);
    return (
        <div className="text-container">
            <h1 className="header">{favoriteCity.LocalizedName}</h1>
            <h3>{favoriteCity?.isFavorite && 'favorite'}</h3>
        </div>
    )
}
