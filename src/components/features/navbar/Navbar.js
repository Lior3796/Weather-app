import React from 'react'
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import { ToggleTheme } from '../toggleTheme/ToggleTheme';
import { ToggleUnit } from '../toggleUnit/ToggleUnit';
import { Header } from '../header/Header';
import { useSelector } from 'react-redux';
import { Buttons } from '../buttons/Buttons';
import SwipeableTemporaryDrawer from '../sidebar/Sidebar';

export const Navbar = () => {
    const favoriteCity = useSelector(state => state.cityReducer);
    return (
        <nav className="navbar-container">
            <div>
                <ToggleTheme />
                <ToggleUnit />
            </div>
            <Header favoriteCity={favoriteCity} />
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <Link className="navbar-link" to="/weather-app"> Weather </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/weather-app/favorites"> Favorites </Link>
                </li>
                <Buttons />
            </ul>
        </nav>
    )
}
