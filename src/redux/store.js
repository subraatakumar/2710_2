// import { combineReducers, createStore, applyMiddleware } from "redux";
// import counterReducer from "./reducers/counterReducer";
// import authReducer from "./reducers/authReducer";
// import loggerMiddleware from "./custom_middleware/redux_logger";
// import productsReducer from "./reducers/productsReducer";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import counterSlice from "./slices/counterSlice";
import productsSlice from "./slices/productsSlice";

// const combineReducer = combineReducers({
//   counterReducer,
//   authReducer,
//   productsReducer,
// });

// export const store = createStore(
//   combineReducer,
//   applyMiddleware(loggerMiddleware, thunk)
// );

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    counterReducer: counterSlice,
    productsReducer: productsSlice,
  },
});
