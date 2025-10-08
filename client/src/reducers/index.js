import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export default rootReducer;
