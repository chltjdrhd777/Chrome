import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import { mainReducer } from "./mainReducer";

const middleware = [logger, reduxThunk];

export const createStore = () => {
  const store = configureStore({
    reducer: mainReducer,
    middleware,
  });

  return store;
};
