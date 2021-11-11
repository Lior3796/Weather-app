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
                        <Route path="/Weather" element={<Weather />} />
                        <Route exact path="/" element={<Weather />} />
                        <Route exact path="/favorites" element={<Favorites />} />
                    </Routes>
                </>
            </Router>
        </div>
    )
}
