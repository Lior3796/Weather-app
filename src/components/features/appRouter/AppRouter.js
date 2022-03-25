import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Navbar } from '../navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { Weather } from '../../pages/Weather';
import { Favorites } from '../../pages/Favorites';
import '../../styles/style.css';
import Sidebar from '../sidebar/Sidebar';
import { checkWindowWidth } from '../../utills/Index';
import { Footer } from '../footer/Footer';


export const AppRouter = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const favoriteCity = useSelector(state => state.cityReducer);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }, [])

    return (

        <>
            <div className={checkWindowWidth(windowWidth) && "layout-container"} >
                {checkWindowWidth(windowWidth) ? <Sidebar /> : <Navbar />}

            </div>
            <Routes>
                <Route path="/" exact element={<Weather />} />
                <Route path="/Weather-app" exact element={<Weather />} />
                <Route path="/Weather-app/favorites" exact element={<Favorites />} />
            </Routes>
            <Footer />
        </>

    )
}
