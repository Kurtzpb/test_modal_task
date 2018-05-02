import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { mainReducer } from "./reducer";

import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";

import logger from "redux-logger";

import "./index.css";

const middlewares = [thunk, logger];

export const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
