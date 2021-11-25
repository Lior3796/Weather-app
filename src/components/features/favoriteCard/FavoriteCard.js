import React, { useState, useEffect } from 'react';
import '../../styles/style.css';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_FORCASTS, CHANGE_CITY } from '../../../redux/actions/types';
import { getDailyForecasts, getCityWeather } from '../../service/service';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FavoriteCard = ({ city }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [temp, setTemp] = useState();
    const unit = useSelector(state => state.toggleReducer.toggleTemp);


    const changeForecasts = async () => {
        try {
            const { DailyForecasts } = await getDailyForecasts(city.Key);
            dispatch({ type: UPDATE_FORCASTS, payload: DailyForecasts });
            dispatch({ type: CHANGE_CITY, payload: city });
            navigate({ pathname: "/weather-app" })
        } catch (e) {
            toast("city not found")
        }
    }

    const getWeather = async () => {
        try {
            const weather = await getCityWeather(city);
            const { Imperial, Metric } = weather[0].ApparentTemperature;
            setTemp({ Imperial, Metric });
        } catch (e) {
            toast("can't get weather for this city")
        }
    }

    useEffect(() => {
        getWeather();
    }, [])
    return (
        <Card className="favoriteCard">
            <CardContent>
                <Typography color="text.primary">
                    <Typography style={{ fontFamily: "Assistant", textAlign: "center" }} gutterBottom variant="h3" component="div">
                        {city.LocalizedName}
                    </Typography>
                </Typography>
                <Typography style={{ fontFamily: "Assistant", textAlign: "center" }} gutterBottom variant="div" component="h3">
                    <Typography style={{ fontFamily: "Assistant", textAlign: "center" }} gutterBottom variant="h3" component="div">
                        {unit}
                    </Typography>
                    <Typography style={{ fontFamily: "Assistant", textAlign: "center" }} gutterBottom variant="h3" component="small">
                        {unit === "Imperial" ? temp?.Imperial?.Value : temp?.Metric?.Value}
                    </Typography>
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => changeForecasts()} size="large">Click here </Button>
            </CardActions>
            <ToastContainer />
        </Card>

    )
}







