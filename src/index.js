import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchFighters, requestFighters } from "./reducers";


const logger = createLogger();

const rootReducer = combineReducers({ searchFighters , requestFighters});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
