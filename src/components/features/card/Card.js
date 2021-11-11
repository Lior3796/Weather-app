import React from 'react'
import '../../styles/style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardWrapper = ({ city }) => {
    console.log(city);
    return (
        <div className="card-container">
            <Card className="ForecastsCard" id="favoriteCard">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {city.WeatherText}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {city.LocalizedName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}







