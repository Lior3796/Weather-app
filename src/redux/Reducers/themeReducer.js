import { CHANGE_THEME, CHANGE_UNIT } from "../actions/types";

const themeReducer = (toggle = { toggleTheme: 'light', toggleTemp: 'Imperial' }, action) => {

  switch (action.type) {
    case CHANGE_THEME:
      console.log(action.payload);
      if (action.payload) {
        return { ...toggle, toggleTheme: 'dark' };
      }
      return { ...toggle, toggleTheme: 'light' };
    case CHANGE_UNIT:
      console.log(action.payload)
      if (action.payload) {
        console.log(action.payload)
        return { ...toggle, toggleTemp: "Imperial" };
      }
      return { ...toggle, toggleTemp: "Metric" };

    default:
      return toggle;
  }
};

export default themeReducer;