import React, { useState, useRef, useEffect } from 'react';
import '../../styles/style.css';
import { CHANGE_CITY, UPDATE_FORCASTS } from '../../../redux/actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList, getCityWeather, getDailyForecasts } from '../../service/service';
import { Header } from '../header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Search = () => {
    const [chosenCity, setChosenCity] = useState('');
    const [locationKey, setLocationKey] = useState('');
    const dispatch = useDispatch();
    const favoriteCity = useSelector(state => state.cityReducer);

    const weatherHandler = () => {
        getCityList(chosenCity) // locationKey
            .then(cities => cityListHandler(cities))
            .then(({ DailyForecasts }) => dispatch({ type: UPDATE_FORCASTS, payload: DailyForecasts }))
            .catch(err => toast(`Cant get ${chosenCity} forecasts`))
    }

    const cityListHandler = (cities) => {
        dispatch({ type: CHANGE_CITY, payload: cities[0] })
        setLocationKey(cities[0].Key)
    }

    const isValidValue = (e) => {
        let value = e.target.value;
        value = value.replace(RegExp(/[^A-Z a-z]/gi), "");
        setChosenCity(value);
    }


    return (
        <div className="search-container">
            <Header favoriteCity={favoriteCity} />
            <div className="search-bar">
                <input className="search-input" value={chosenCity} onChange={(e) => isValidValue(e)} type="text" />
                <input className="search-button" type="submit" onClick={() => weatherHandler()} value="search" />
                <ToastContainer />
            </div>
        </div>
    )
}
