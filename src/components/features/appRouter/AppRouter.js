import React from 'react';
import { Navbar } from '../navbar/Navbar';
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import { Weather } from '../../pages/Weather';
import { Favorites } from '../../pages/Favorites';
import '../../styles/style.css';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Weather />} />
                        <Route exact path="/Weather-app" element={<Weather />} />
                        <Route exact path="/Weather-app/favorites" element={<Favorites />} />
                    </Routes>
                </>
            </Router>
        </div>
    )
}
