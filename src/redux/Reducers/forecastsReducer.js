import { UPDATE_FORCASTS, DEFAULT_FORCASTS } from "../actions/types";

const forecastsReducer = (forecasts = [], action) => {
    switch (action.type) {
        case UPDATE_FORCASTS:
            const mapForecasts = action.payload.map(({ Temperature, Date, Day }) => { return { Temperature, currentDay: Date, Day } });
            return mapForecasts;
        case DEFAULT_FORCASTS:
            console.log(action.payload.DailyForecasts);
            const defualtForecasts = action.payload.DailyForecasts.map(({ Temperature, Date, Day }) => { return { Temperature, currentDay: Date, Day } });
            return defualtForecasts;
        default:
            return forecasts;
    }
};

export default forecastsReducer;