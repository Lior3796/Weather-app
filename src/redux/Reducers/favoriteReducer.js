import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const favoriteReducer = (favoriteCities = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            console.log(action.payload);
            localStorage.setItem("favoriteCities", JSON.stringify([...favoriteCities, action.payload]));
            return [...favoriteCities, action.payload];
        case DELETE_FAVORITE:
            localStorage.clear();
            return [];
        default:
            return favoriteCities;
    }
};

export default favoriteReducer;