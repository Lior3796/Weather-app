import React, { useState, useEffect } from 'react';
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_FORCASTS, CHANGE_CITY } from '../../../redux/actions/types';
import { getDailyForecasts, getCityWeather } from '../../service/service';
import { ToggleUnit } from '../toggleUnit/ToggleUnit';

export const CardWrapper = ({ city, currentWeather }) => {
    const dispatch = useDispatch();
    const [temp, setTemp] = useState();
    const unit = useSelector(state => state.themeReducer.toggleTemp);
    const changeForecasts = () => {
        getDailyForecasts(city.Key)
            .then((res) => dispatch({ type: UPDATE_FORCASTS, payload: res }))
            .then(() => dispatch({ type: CHANGE_CITY, payload: city }))
            .catch(err => console.log(err))
    }

    const getWeather = () => {
        getCityWeather(city)
            .then((city) => {
                const { Imperial, Metric } = city[0].ApparentTemperature;
                setTemp({ Imperial, Metric });
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getWeather();
    }, [])
    return (
        <Card className="card">
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    <Typography gutterBottom variant="h3" component="div">
                        {city.LocalizedName}
                    </Typography>
                </Typography>
                <Typography gutterBottom variant="div" component="h6">
                    <Typography gutterBottom variant="h6" component="small">
                        {unit}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="small">
                        {unit === "Imperial" ? temp?.Imperial?.Value : temp?.Metric?.Value}
                    </Typography>
                </Typography>
            </CardContent>
            <CardActions>
                <Link to="/Lior-Solomon-7.11.2021"><Button onClick={() => changeForecasts()} size="small">Click here </Button></Link>
                <ToggleUnit />
            </CardActions>
        </Card>

    )
}







