import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
// Import other reducers if you have more

const rootReducer = combineReducers({
  students: studentReducer,
  // Add other reducers here
});

export default rootReducer;