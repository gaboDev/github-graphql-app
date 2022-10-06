import { combineReducers } from "redux";
import topicsReducer from "./topics";

const rootReducer = combineReducers({ topics: topicsReducer });
export default rootReducer;