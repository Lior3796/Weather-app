import React, { useEffect } from 'react';
import '../styles/style.css';
import { getDailyForecasts } from '../service/service';
import { useSelector, useDispatch } from 'react-redux';
import { DEFAULT_FORCASTS } from '../../redux/actions/types';
import { Search } from '../features/search/Search';
import { ForecastsCard } from '../features/forecastsCard/ForecastsCard';
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
            console.log("cant update forecasts");
        }
    }
    useEffect(() => {
        getForecasts();
    }, [Key])
    return (
        <div className="weather-container">
            <Search />
            <div className="card-container">
                {
                    forecastsReducer?.map((city, key) => <ForecastsCard key={key} forecast={city} />)
                }
                <ToastContainer />
            </div>
        </div>
    )
}
