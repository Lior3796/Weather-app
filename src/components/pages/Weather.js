import React, { useEffect } from 'react';
import '../styles/style.css';
import { getDailyForecasts } from '../service/service';
import { useSelector, useDispatch } from 'react-redux';
import { DEFAULT_FORCASTS } from '../../redux/actions/types';
import { Search } from '../features/search/Search';
import { ForecastsCard } from '../features/forecastsCard/ForecastsCard';
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Weather = () => {
    const { Key } = useSelector(state => state.cityReducer);
    const { forecastsReducer } = useSelector(state => state);
    const dispatch = useDispatch();

    const getForecasts = async () => {
        try {
            const forecasts = await getDailyForecasts(Key);
            dispatch({ type: DEFAULT_FORCASTS, payload: forecasts })
        } catch (e) {
            toast("cant update forecasts");
        }
    }
    const ForecastsCardVariant = {
        transition: { duration: 5, delay: 1.5 },
        visible: { x: "0vw" },
        hidden: { x: "-100vw" },
    }

    const showForecasts = (forecastsReducer) => {
        console.log(forecastsReducer)
        return forecastsReducer?.map((city, key) =>
            <ForecastsCard
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={ForecastsCardVariant} key={key} forecast={city} />)
    }

    useEffect(() => {
        getForecasts();
    }, [Key])

    return (
        <div className="weather-container">
            <Search />
            <div className="forecasts-map-container">
                {showForecasts(forecastsReducer)}
                <ToastContainer />

            </div>
        </div>
    )
}
