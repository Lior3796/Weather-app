import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import { getDailyForecasts } from '../service/service';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_FAVORITE } from '../../redux/Actions/types';
import { Search } from '../features/search/Search';
import { CardWrapper } from '../features/card/Card';
import { Button } from '../features/button/Button';
import { ForecastsCard } from '../features/forecastsCard/ForecastsCard';
import { cities } from '../../data/cities';
import { DEFAULT_FORCASTS } from '../../redux/Actions/types';

export const Weather = () => {
    // const city = useSelector(state => state.cityReducer);
    // const forecasts = useSelector(state => state.forecastsReducer);
    // const dispatch = useDispatch();

    // const getForecasts = () => {
    //     getDailyForecasts(city.Key)
    //         .then(res => dispatch({ type: DEFAULT_FORCASTS, payload: res }))
    //         .catch(err => console.log(err))
    // }
    // useEffect(() => {
    //     getForecasts();
    // }, [])
    return (
        <div className="weather-container">
            <Search />

            <div className="card-container">
                {
                    JSON.parse(cities)?.map((city, key) => <ForecastsCard key={key} Temperature={city} />)
                }

            </div>
        </div>
    )
}
