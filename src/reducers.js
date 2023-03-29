import { combineReducers } from "redux";
import tasksReducer from "../src/redux/tasksReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
