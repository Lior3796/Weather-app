import React, { useState, useMemo } from 'react';
import '../../styles/style.css';
import { CHANGE_CITY, UPDATE_FORCASTS } from '../../../redux/actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList, getDailyForecasts } from '../../service/service';
import { Header } from '../header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Search = () => {
    const [chosenCity, setChosenCity] = useState('');
    const dispatch = useDispatch();

    const weatherHandler = async () => {
        let cities;
        try {
            cities = await getCityList(chosenCity);
        } catch (e) {
            toast(`Cant get ${chosenCity} forecasts`)
        }
        try {
            const chosenCity = cityListHandler(cities);
            const { DailyForecasts } = await getDailyForecasts(chosenCity.Key);
            dispatch({ type: UPDATE_FORCASTS, payload: DailyForecasts })
        } catch (e) {
            toast(`Cant get ${chosenCity} forecasts`)
        }
    }

    const cityListHandler = (cities) => {
        dispatch({ type: CHANGE_CITY, payload: cities[0] });
        return cities[0];
    }

    const isValidValue = (e) => {
        let value = e.target.value;
        value = value.replace(RegExp(/[^A-Z a-z]/gi), "");
        setChosenCity(value);
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <input className="search-input" value={chosenCity} onChange={(e) => isValidValue(e)} type="text" />
                <input className="search-button" type="submit" onClick={() => weatherHandler()} value="search" />
            </div>
        </div>
    )
}
