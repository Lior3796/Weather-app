import { useState, useEffect } from 'react';
import '../../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { CHANGE_CITY, UPDATE_FORCASTS } from '../../../redux/actions/types';
import { useDispatch } from 'react-redux';
import { getCityList, getDailyForecasts } from '../../service/service';
import { ToastContainer, toast } from 'react-toastify';
import { isValidValue } from '../../utills/Index';

export const Search = () => {
    const [chosenCity, setChosenCity] = useState();
    const dispatch = useDispatch();

    const weatherHandler = async () => {
        let cities;
        try {
            cities = await getCityList(chosenCity);
        } catch (e) {
            toast(`Cant get ${chosenCity} forecasts, pick another city`);
        }
        try {
            const newCity = await cityListHandler(cities);
            const { DailyForecasts } = await getDailyForecasts(newCity.Key);
            dispatch({ type: UPDATE_FORCASTS, payload: DailyForecasts })
        } catch (e) {
            toast(`Can't get ${chosenCity} forecasts`)
        }
    }

    const cityListHandler = (cities) => {
        dispatch({ type: CHANGE_CITY, payload: cities[0] });
        return cities[0];
    }

    const searchInputHandler = (e) => {
        const value = isValidValue(e);
        setChosenCity(value);
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <input className="search-input" value={chosenCity} onChange={e => searchInputHandler(e)} type="text" />
                <input className="search-button" type="submit" onClick={() => weatherHandler()} value="search" />
            </div>

            <ToastContainer />
        </div>
    )
}
