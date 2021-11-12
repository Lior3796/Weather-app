import React, { useState, useRef, useEffect } from 'react';
import '../../styles/style.css';
import { CHANGE_CITY, UPDATE_FORCASTS } from '../../../redux/actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList, getCityWeather, getDailyForecasts } from '../../service/service';
import { Header } from '../header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Search = () => {
    const inputRef = useRef('');
    const [chosenCity, setChosenCity] = useState('Tel aviv');
    const [locationKey, setLocationKey] = useState('');
    const dispatch = useDispatch();
    const favoriteCity = useSelector(state => state.cityReducer);

    const weatherHandler = () => {
        toast('Load your forecasts');
        getCityList(chosenCity) // locationKey
            .then(cities => cityListHandler(cities))
            .then(({ DailyForecasts }) => dispatch({ type: UPDATE_FORCASTS, payload: DailyForecasts }))
            .catch(err => toast('something went wrong '))
    }

    const cityListHandler = (cities) => {
        dispatch({ type: CHANGE_CITY, payload: cities[0] })
        setLocationKey(cities[0].Key)
    }
    useEffect(() => {

    }, [favoriteCity])

    return (
        <div className="search-container">
            <div>
                <Header favoriteCity={favoriteCity} />
                <div className="search-bar">
                    <input ref={inputRef} type="text" onChange={(e) => { setChosenCity(e.target.value) }} />
                    <input type="submit" onClick={() => weatherHandler()} value="search" />
                    <ToastContainer />
                </div>
            </div>


        </div>
    )
}
