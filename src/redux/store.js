import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import authReducer from "./reducers/authReducer";

const combineReducer = combineReducers({ counterReducer, authReducer });

export const store = createStore(combineReducer);
