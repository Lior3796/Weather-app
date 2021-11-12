import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const favoriteReducer = (favoriteCities = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            localStorage.setItem("favoriteCities", JSON.stringify([...favoriteCities, { ...action.payload, isFavorite: true }]));
            return [...favoriteCities, { ...action.payload, isFavorite: true }];
        case DELETE_FAVORITE:
            const filterdCities = favoriteCities.filter(city => city.Key !== action.payload);
            localStorage.setItem("favoriteCities", JSON.stringify(filterdCities));
            return filterdCities;
        default:
            return favoriteCities;
    }
};

export default favoriteReducer;