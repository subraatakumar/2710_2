import { combineReducers, createStore, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import authReducer from "./reducers/authReducer";
import loggerMiddleware from "./custom_middleware/redux_logger";
import productsReducer from "./reducers/productsReducer";
import { thunk } from "redux-thunk";

const combineReducer = combineReducers({
  counterReducer,
  authReducer,
  productsReducer,
});

export const store = createStore(
  combineReducer,
  applyMiddleware(loggerMiddleware, thunk)
);
