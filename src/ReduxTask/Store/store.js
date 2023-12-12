import { createStore } from "redux";
import logger from 'redux-logger'
import { studentReducer } from "../Reducer/StudentReducer";
import { applyMiddleware } from "redux";

const store = createStore(studentReducer ,applyMiddleware(logger));
export default store