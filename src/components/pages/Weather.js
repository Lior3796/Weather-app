import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import { getDailyForecasts } from '../service/service';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_FAVORITE, DEFAULT_FORCASTS, RESET_FAVORITE } from '../../redux/actions/types';
import { Search } from '../features/search/Search';
import { ForecastsCard } from '../features/forecastsCard/ForecastsCard';


export const Weather = () => {
    const city = useSelector(state => state.cityReducer);
    const forecasts = useSelector(state => state.forecastsReducer);
    const dispatch = useDispatch();

    const getForecasts = () => {
        getDailyForecasts(city.Key)
            .then(res => dispatch({ type: DEFAULT_FORCASTS, payload: res }))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getForecasts();
    }, [city.Key])
    return (
        <div className="weather-container">
            <Search />
            <div className="card-container">
                {
                    forecasts?.map((city, key) => <ForecastsCard key={key} Temperature={city} />)
                }

            </div>
        </div>
    )
}
