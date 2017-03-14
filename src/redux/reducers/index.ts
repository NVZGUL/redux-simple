import {combineReducers} from "redux";
import {counter} from "./counter-reducer";

let rootReducer = combineReducers({
  counter
});

export default rootReducer;