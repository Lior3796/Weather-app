import React, { useState, useEffect } from 'react';
import '../../styles/style.css';
import { CHANGE_CITY, UPDATE_FORCASTS } from '../../../redux/Actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList, getCityWeather, getDailyForecasts } from '../../service/service';
import { AutoComplete } from '../autoComplete/AutoComplete';
import { CardWrapper } from '../card/Card';

export const Search = () => {
    console.log(process.env.REACT_APP_API_KEY);
    const [chosenCity, setChosenCity] = useState('Tel aviv');
    const [locationKey, setLocationKey] = useState('');
    const [cityList, setCityList] = useState([]);
    const dispatch = useDispatch();
    const favoriteCity = useSelector(state => state.cityReducer);


    const weatherHandler = () => {
        console.log(chosenCity);
        getCityList(chosenCity) // locationKey
            .then(cities => cityListHandler(cities))
            .then(({ DailyForecasts }) => dispatch({ type: UPDATE_FORCASTS, payload: DailyForecasts }))
            .catch(err => console.log(err))
    }

    const cityListHandler = (cities) => {
        setCityList(cities[0]);
        console.log(cities);
        dispatch({ type: CHANGE_CITY, payload: cities[0] })
        setLocationKey(cities[0].Key)
        return getDailyForecasts(locationKey)
    }


    return (
        <div className="search-container">
            <div>
                <h3>{favoriteCity.LocalizedName}</h3>
                <div className="search-bar">
                    <input type="text" onChange={(e) => { setChosenCity(e.target.value) }} />
                    <input type="submit" onClick={() => weatherHandler()} value="search" />
                </div>
            </div>


        </div>
    )
}
