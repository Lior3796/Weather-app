import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Navbar } from '../navbar/Navbar';
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import { Weather } from '../../pages/Weather';
import { Favorites } from '../../pages/Favorites';
import '../../styles/style.css';
import Sidebar from '../sidebar/Sidebar';
import { ToggleUnit } from '../toggleUnit/ToggleUnit';
import { ToggleTheme } from '../toggleTheme/ToggleTheme';
import { Header } from '../header/Header';

export const AppRouter = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const favoriteCity = useSelector(state => state.cityReducer);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }, [])
    return (
        <Router>
            <>
                <div className={windowWidth < 550 && "layout-container"} >
                    {windowWidth > 550 ? <Navbar /> : <Sidebar />}
                    {windowWidth < 550 && <Header favoriteCity={favoriteCity} />}

                </div>
                <Routes>
                    <Route path="/weather-app" exact element={<Weather />} />
                    <Route path="/weather-app/favorites" exact element={<Favorites />} />
                </Routes>
            </>
        </Router >
    )
}
