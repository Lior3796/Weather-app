import React, { useEffect, useMemo, useState } from 'react';
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

export const AppRouter = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }, [])
    return (
        <Router>
            <>
                {windowWidth > 550 ? <Navbar /> : <Sidebar />}
                <Routes>
                    <Route path="/weather-app" exact element={<Weather />} />
                    <Route path="/weather-app/favorites" exact element={<Favorites />} />
                </Routes>
            </>
        </Router>
    )
}
