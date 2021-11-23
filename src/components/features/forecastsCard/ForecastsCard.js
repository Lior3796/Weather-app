import React from 'react'
import '../../styles/style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

export const ForecastsCard = ({ forecast }) => {
    let { currentDay } = forecast;
    const { Maximum, Minimum } = forecast.Temperature;
    const { IconPhrase } = forecast.Day;
    currentDay = new Date(forecast.currentDay).toLocaleString('en-us', { weekday: 'long' });

    return (

        <div className="ForecastsCard-container">
            <Card component={motion.div}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className="ForecastsCard" >
                <CardContent style={{ width: "60%" }}
                >
                    <Typography style={{ fontFamily: "Assistant" }} gutterBottom variant="h5" component="div">
                        {currentDay}
                    </Typography>
                    <Typography style={{ fontFamily: "Assistant" }} gutterBottom variant="h5" component="div">
                        {IconPhrase}
                    </Typography>
                    <Typography style={{ fontFamily: "Assistant" }} variant="h6" color="text.secondary">
                        {Maximum.Value}
                    </Typography>
                </CardContent>

            </Card>
        </div>

    )
}
