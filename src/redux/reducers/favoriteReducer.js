import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const favoriteReducer = (favoriteCities = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            if (!(favoriteCities.length) || !(favoriteCities.find(obj => obj.Key === action.payload.Key))) {
                return [...favoriteCities, action.payload];
            }
            return favoriteCities;

        case DELETE_FAVORITE:
            const filterdCities = favoriteCities.filter(city => city.Key !== action.payload);
            return filterdCities;

        default:
            return favoriteCities;
    }
};

export default favoriteReducer;