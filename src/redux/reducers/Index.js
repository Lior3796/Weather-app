import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import favoriteReducer from "./favoriteReducer";
import cityReducer from "./cityReducer";
import forecastsReducer from "./forecastsReducer";

export default combineReducers({
  themeReducer,
  favoriteReducer,
  cityReducer,
  forecastsReducer
});
