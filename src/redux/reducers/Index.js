import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import cityReducer from "./cityReducer";
import forecastsReducer from "./forecastsReducer";
import themeReducer from "./themeReducer";
export default combineReducers({
  themeReducer,
  favoriteReducer,
  cityReducer,
  forecastsReducer
});
