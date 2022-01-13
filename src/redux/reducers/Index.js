import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import cityReducer from "./cityReducer";
import forecastsReducer from "./forecastsReducer";
import toggleReducer from "./toggleReducer";
export default combineReducers({
  toggleReducer,
  favoriteReducer,
  cityReducer,
  forecastsReducer
});
