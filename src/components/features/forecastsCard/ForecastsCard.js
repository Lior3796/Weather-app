import React from 'react'
import '../../styles/style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ForecastsCard = ({ Temperature }) => {
    const date = new Date(Temperature.currentDay).toLocaleString('en-us', { weekday: 'long' });
    const { Maximum, Minimum } = Temperature.Temperature;
    const { IconPhrase } = Temperature.Day;
    console.log(Temperature.Day);
    return (
        <div className="ForecastsCard-container">
            <Card className="ForecastsCard" >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {date}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {IconPhrase}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {Maximum.Value}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
