import React from 'react';
import '../../styles/style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { CHANGE_CITY, UPDATE_FORCASTS, DEFAULT_FORCASTS } from '../../../redux/actions/types';
import { getCityList, getCityWeather, getDailyForecasts } from '../../service/service';

export const CardWrapper = ({ city }) => {
    const dispatch = useDispatch();
    const changeForecasts = () => {
        console.log(city);
        getDailyForecasts(city.Key)
            .then((res) => dispatch({ type: UPDATE_FORCASTS, payload: res }))
            .catch(err => console.log(err))
    }
    return (
        <div className="card-container">
            <Card className="ForecastsCard" id="favoriteCard">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {city.WeatherText}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <Typography gutterBottom variant="h3" component="div">
                            {city.LocalizedName}
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => changeForecasts()} size="small">Click here </Button>
                </CardActions>
            </Card>
        </div>
    )
}







