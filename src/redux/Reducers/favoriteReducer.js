import { ADD_FAVORITE, DELETE_FAVORITE, RESET_FAVORITE } from "../actions/types";

const favoriteReducer = (favoriteCities = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            localStorage.setItem("favoriteCities", JSON.stringify([...favoriteCities, action.payload]));
            return [...favoriteCities, action.payload];
        case DELETE_FAVORITE:
            const filterdCities = favoriteCities.filter(city => city.Key !== action.payload);
            localStorage.setItem("favoriteCities", JSON.stringify(filterdCities));
            return filterdCities;
        case RESET_FAVORITE:
            localStorage.setItem("favoriteCities", JSON.stringify([]));
            return favoriteCities;
        default:
            return favoriteCities;
    }
};

export default favoriteReducer;