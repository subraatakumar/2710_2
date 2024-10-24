import { combineReducers, createStore, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import authReducer from "./reducers/authReducer";
import loggerMiddleware from "./custom_middleware/redux_logger";

const combineReducer = combineReducers({ counterReducer, authReducer });

export const store = createStore(
  combineReducer,
  applyMiddleware(loggerMiddleware)
);
