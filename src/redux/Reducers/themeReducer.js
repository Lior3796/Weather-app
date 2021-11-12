import { CHANGE_THEME } from "../actions/types";

const themeReducer = (theme = { ToggleTheme: 'light' }, action) => {

  switch (action.type) {
    case CHANGE_THEME:
      console.log(action.payload);
      if (action.payload) {
        return { ToggleTheme: 'dark' };
      }
      return { ToggleTheme: 'light' };

    default:
      return theme;
  }
};

export default themeReducer;