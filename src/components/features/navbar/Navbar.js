import React, { useEffect, useState } from 'react'
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import { Header } from '../header/Header';
import { useSelector } from 'react-redux';
import { Buttons } from "../buttons/Buttons";
import { ToggleTheme } from '../toggleTheme/ToggleTheme';
export const Navbar = () => {
    const favoriteCity = useSelector(state => state.cityReducer);

    return (
        <nav className="navbar-container">
            <Header favoriteCity={favoriteCity} />
            <ToggleTheme />
            <ul className="navbar-ul">

                <li className="navbar-li">
                    <Link className="navbar-link" to="/Weather-app"> Weather </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/Weather-app/favorites"> Favorites </Link>
                </li>
            </ul>
            <Buttons />

        </nav>
    )
}
