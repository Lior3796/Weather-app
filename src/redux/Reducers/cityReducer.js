import { CHANGE_CITY, CHANGE_TEMP } from "../Actions/types";

const cityReducer = (state = { LocalizedName: "Tel Aviv", Key: process.env.REACT_APP_DEFUALT_CITY, WeatherText: 'Mostly cloudy' }, action) => {

    switch (action.type) {
        case CHANGE_CITY:
            console.log(action.payload);
            const { LocalizedName, Key, WeatherText } = action.payload;
            return { LocalizedName, Key, WeatherText };
        default:
            return state;
    }
};

export default cityReducer;