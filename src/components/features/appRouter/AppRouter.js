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
                        <Route path="/" exact element={<Weather />} />
                        <Route path="/Lior-Solomon-31.10.2021" exact element={<Weather />} />
                        <Route path="/Lior-Solomon-31.10.2021/favorites" exact element={<Favorites />} />
                        <Route path="/favorites" exact element={<Favorites />} />


                    </Routes>
                </>
            </Router>
        </div>
    )
}
