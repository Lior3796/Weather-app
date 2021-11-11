import React from 'react';
import '../../styles/style.css';

export const Header = ({ favoriteCity }) => {
    return (

        <div className="text-container">
            <h1 className="header">{favoriteCity.LocalizedName}</h1>
        </div>
    )
}
