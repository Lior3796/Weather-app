import { CHANGE_THEME } from "../Actions/types";

const themeReducer = (themeReducer = { ToggleTheme: 'light' }, action) => {

  switch (action.type) {
    case CHANGE_THEME:
      console.log(action.payload);
      if (action.payload) {
        return { ToggleTheme: 'dark' };
      }

      return { ToggleTheme: 'light' };

    default:
      return themeReducer;
  }
};

export default themeReducer;