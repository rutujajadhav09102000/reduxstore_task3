import {combineReducers} from 'redux'
import { studentReducer} from './StudentReducer';
export const rootReducer = combineReducers({ 
    studentReducer : studentReducer
})